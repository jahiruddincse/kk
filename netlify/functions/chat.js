// netlify/functions/chat.js
// Serverless proxy for Gemini API using standard Node.js https module for maximum compatibility.
const https = require('https');

exports.handler = async (event, context) => {
    // Only allow POST requests
    if (event.httpMethod !== "POST") {
        return { 
            statusCode: 405, 
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ error: "Method Not Allowed" }) 
        };
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
        return { 
            statusCode: 500, 
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ error: "Gemini API key not configured on the Netlify dashboard." }) 
        };
    }

    try {
        const bodyData = event.body;

        return new Promise((resolve, reject) => {
            const options = {
                hostname: 'generativelanguage.googleapis.com',
                port: 443,
                path: `/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            };

            const req = https.request(options, (res) => {
                let data = '';

                res.on('data', (chunk) => {
                    data += chunk;
                });

                res.on('end', () => {
                    resolve({
                        statusCode: res.statusCode,
                        headers: { 
                            "Content-Type": "application/json",
                            "Access-Control-Allow-Origin": "*" 
                        },
                        body: data
                    });
                });
            });

            req.on('error', (e) => {
                resolve({
                    statusCode: 500,
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ error: e.message })
                });
            });

            req.write(bodyData);
            req.end();
        });

    } catch (error) {
        return {
            statusCode: 500,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ error: error.message })
        };
    }
};

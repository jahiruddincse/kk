# ⚖️ Haqqdar AI (হকদাৰ AI / हक़दार AI) — India's AI Rights & Benefits Navigator

> **"No Indian should lose their rights because they didn't know how to fight back."**

**When the system says NO, know what to say BACK.**

Haqqdar AI is an AI-powered rights & benefits navigator that converts a citizen's plain-language problem into a **ready-to-file legal document** with a **step-by-step bureaucratic escalation path** — in Hindi, English, or Assamese.

## 🎯 The Problem

Every day in India, millions of people hear:
- 🚔 *"FIR nahi hoga"* — Police refuse to register complaints
- 🏦 *"Scheme ke liye eligible nahi ho"* — Wrongly rejected from government schemes
- 🍚 *"Ration khatam ho gaya"* — PDS shops turn people away
- 💰 *"Salary next month"* — Employers keep not paying wages

These citizens have **legal rights** — they just don't know what to do when denied.

## ✨ What Makes Haqqdar AI Unique

**No existing tool helps citizens AFTER the system says NO.**

| Existing Tools | What They Do | What They DON'T Do |
|---|---|---|
| MyScheme | Lists schemes | Doesn't help when **rejected** |
| RTI portals | Let you file RTI | Don't help you **write** the RTI |
| e-FIR portals | File FIR online | Don't help when police **refuse** |
| Legal aid apps | Connect to lawyers | **Cost money**, slow |
| **Haqqdar AI** | **Generates ready-to-file legal documents + step-by-step escalation path** | — |

## 🔧 How It Works

1. **Describe your problem** in plain language (Hindi/English/Assamese)
2. **AI identifies** the violated right and applicable law
3. **Auto-generates** formal complaint/RTI/escalation letter in correct legal format
4. **Provides escalation ladder** with real contacts, portal links, and deadlines
5. **Tracks your case** with deadline alerts and follow-up generation

## 📋 Categories Covered

| Category | Laws/Framework |
|---|---|
| 🚔 FIR Refusal | Sec 173 BNSS, Zero FIR |
| 📋 RTI Filing | RTI Act 2005, Sec 6(1) |
| 💰 Unpaid Wages | Code on Wages 2019 |
| 🏛️ Scheme Rejection | CPGRAMS, State Portals |
| 🍚 Ration/PDS Denial | NFSA 2013, Sec 3 & 8 |
| 🏔️ Northeast Special | AFSPA, NRC, ILP, 6th Schedule |

## 🏔️ Northeast India Focus

Special module for underserved communities in Northeast India:
- **Flood relief & compensation** (Assam-specific)
- **Tea garden worker rights**
- **Scholarship delays**
- **Inner Line Permit (ILP) issues**
- **Tribal land rights** (6th Schedule)
- **NRC legal recourse**

## 🛠️ Tech Stack

- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **AI:** Google Gemini AI (1.5 Flash)
- **Serverless:** Netlify Functions (API proxy)
- **Languages:** English, Hindi (हिंदी), Assamese (অসমীয়া)

## 🚀 Getting Started

### Local Development
```bash
# Clone the repo
git clone https://github.com/jahiruddincse/haqdar.git
cd haqdar

# Start local server
python3 -m http.server 8080

# Open http://localhost:8080
```

### AI Configuration
1. Get a free API key from [Google AI Studio](https://aistudio.google.com/)
2. Set it as `GEMINI_API_KEY` in your environment (for production) or save it in your browser's local storage (under the key `gemini_api_key` for quick testing).
3. The AI Rights Navigator is now active!

### Deploy to Netlify
1. Connect your repository `jahiruddincse/haqdar` to [Netlify](https://app.netlify.com).
2. Set `GEMINI_API_KEY` as an environment variable in Netlify's build settings.
3. Deploy automatically (Netlify will use the serverless functions under `netlify/functions/chat.js` to securely proxy your requests).

## 📜 Hackathon

Built for **Build for Good Bharat** — National Student Hackathon for Social Impact 🇮🇳

**Track:** AWAAZ (आवाज़) — Voice, Safety & Social Access

## ⚠️ Disclaimer

Haqqdar AI provides **legal information**, not legal advice. Always consult a qualified lawyer for specific legal matters.

## 📄 License

MIT License — Built for India, by India.

# 📘 Xeno CRM Frontend — React App README

## 🚀 Overview
This is the frontend for the **Xeno CRM Internship Assignment 2025**, built with React.js. It allows users to:

- Log in using Google OAuth (Firebase)
- View past marketing campaigns
- Create new campaign segments with rules
- Preview and launch campaigns
- Generate AI-powered message suggestions using OpenAI

---

## 🧱 Tech Stack
- **React.js** (Create React App)
- **Firebase Authentication** (Google Sign-In)
- **Axios** for API calls
- **React Router DOM** for page routing

---

## 🛠️ Setup Instructions

### 1. Clone and install dependencies
```bash
cd frontend
npm install
```

### 2. Set up Firebase
- Go to [https://console.firebase.google.com](https://console.firebase.google.com)
- Create a project (or use existing one)
- Enable **Google Authentication** under Authentication > Sign-in Method
- Copy your Firebase config (apiKey, authDomain, etc.)
- Replace the config object in `src/pages/Login.js` with your own:

```js
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  // ... other config values
};
```

### 3. Start the app
```bash
npm start
```

This will launch the app at `http://localhost:3000`

---

## 📁 Folder Structure
```
frontend/
├── src/
│   ├── pages/
│   │   ├── Login.js
│   │   ├── Dashboard.js
│   │   └── CampaignForm.js
│   └── App.js
└── pack

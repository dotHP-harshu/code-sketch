# 🧠 Code Sketch - Multi-Language Code Translator & Explainer

A full-stack AI-powered web app that translates source code between languages and explains it line-by-line — built with React, Express, and Google GenAI (Gemini 2.5 Flash).

---

## ✨ Features

- 🔁 Convert code between multiple languages (JS, Python, Java, C++, etc.)
- 📖 Get detailed explanations of code logic
- 🧠 Receive intelligent code reviews and suggestions
- 🎨 Beautiful editor with syntax highlighting (Prism + Monaco)

---

## 🖼️ UI Preview

![preview_1](/preview/preview_1.png)
![preview_1](/preview/preview_2.png)

---

## 🧱 Tech Stack

**Frontend:**

- React 19 + Vite
- Tailwind CSS
- PrismJS & react-simple-code-editor
- Markdown rendering: `react-markdown`, `rehype-prism-plus`

**Backend:**

- Express.js
- Google GenAI (Gemini 2.5 Flash)
- dotenv + cors

---

## 🚀 Getting Started

### 🔧 Backend Setup

```bash
cd backend
npm install
# Add .env with GEMINI_API_KEY
node index.js
```

### 💻 Frontend Setup

```bash

cd frontend
npm install
npm run dev
```

## 📂 Project Structure

```bash
dothp-harshu-code-sketch/
├── backend/
│   └── src/controllers, routers, services
└── frontend/
    └── src/components, context, functions
```

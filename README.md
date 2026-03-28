# 💻 Vibe Code Editor — AI-Powered In-Browser IDE

A browser-based code editor that allows users to write, execute, and preview full-stack applications directly in the browser, enhanced with AI-assisted coding features and real-time execution using WebContainers.

---

## 🚀 Features

- In-browser code execution using WebContainers (no local setup required)
- Monaco Editor integration for a VS Code-like experience
- Multi-framework support (React, Next.js, Express, Angular, Vue, Hono)
- Instant web preview with automatic runtime initialization
- Built-in terminal support inside the browser
- AI-powered chatbot for coding assistance
- Inline code suggestions to improve developer productivity
- OAuth authentication (Google & GitHub)
- Persistent user workspace with saved projects

---

## 🧠 System Overview

The application simulates a lightweight cloud IDE by combining an in-browser runtime environment with an interactive code editor and AI assistance.

### Flow

1. User logs in via OAuth (Google/GitHub)
2. User selects or creates a project from pre-built templates
3. WebContainer initializes and runs the project inside the browser
4. Monaco Editor enables real-time code editing
5. Preview updates instantly as code changes
6. AI assistant helps users with coding queries
7. Projects are stored and accessible via user dashboard

---

## 🧩 Key Components

- Editor Engine → Monaco Editor for code editing
- Runtime Engine → WebContainers for in-browser execution
- Preview Engine → Live rendering of running applications
- AI Assistant → LLM-based chatbot for coding help
- Auth System → OAuth-based authentication
- Project Manager → Handles templates and user workspaces

---

## ⚙️ Tech Stack

### Frontend

- Next.js
- React
- Tailwind CSS
- Monaco Editor

### Runtime

- WebContainers (StackBlitz)

### Backend

- Node.js
- Express.js

### AI

- LLM APIs
- Prompt-based assistance

### Database

- MongoDB

### DevOps

- Vercel (Frontend deployment)

---

## 🛠️ Setup

1. Clone the repository
2. Install dependencies

```bash
npm install
```

3. Create `.env` file cp .env.example .env

4. Add required credentials

5. Run the application

```bash
npm run dev
```

---

## 🔗 Live Demo

- App: https://vibe-code-editor-ochre.vercel.app

---

## 💡 Key Learnings

- Built browser-based runtime environments using WebContainers
- Integrated advanced code editors (Monaco) into web apps
- Designed developer tools with real-time feedback loops
- Implemented AI-assisted coding workflows
- Managed multi-framework templates and execution environments

---

## 🚀 Future Improvements

- Codebase-aware RAG for contextual AI suggestions
- Real-time collaboration (multi-user editing)
- Improved file system persistence
- Plugin/extension support
- Performance optimizations for large projects

---

## 📌 Notes

This project explores the intersection of developer tooling and AI by bringing a full coding environment into the browser with intelligent assistance.

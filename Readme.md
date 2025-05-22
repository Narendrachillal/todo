# 📌 Todo Summary Assistant

A full-stack application where users can manage personal to-do items, generate a smart summary using a real LLM (like OpenAI), and send that summary to a Slack channel via an incoming webhook.

---

## 📸 Features

- ✅ Add, edit, and delete personal to-do items.
- ✅ View a list of current to-dos.
- ✅ Generate a summary of pending to-dos using a real LLM API.
- ✅ Send the generated summary to a Slack channel via a webhook.
- ✅ Clean, modern, responsive UI built with React + Vite.
- ✅ Backend built with Node.js (Express.js) and Supabase PostgreSQL for persistent storage.

---

## 🖥️ Tech Stack

- **Frontend**: React (Vite)
- **Backend**: Node.js, Express.js
- **Database**: Supabase (PostgreSQL)
- **LLM Integration**: OpenAI API
- **Slack Integration**: Slack Incoming Webhooks

---

## 📂 Folder Structure

todo-summary-assistant/

├── client/

│ ├── src/

│ │ ├── components/

│ │ │ ├── TodoForm.jsx

│ │ │ ├── TodoList.jsx

│ │ │ └── Notification.jsx

│ │ ├── App.jsx

│ │ ├── main.jsx

│ │ └── index.css

│ ├── vite.config.js

│ └── package.json

│

├── server/ # Node.js backend

│ ├── routes/

│ │ └── todos.js

│ ├── services/

│ │ ├── openaiService.js

│ │ └── slackService.js

│ ├── server.js

│ ├── .env.example

│ └── package.json

│

├── README.md

└── .gitignore

---

## 📝 Design & Architecture Decisions

- **React + Vite**: Chosen for fast development, clean dev experience, and optimal build output.
- **Node.js + Express**: Lightweight, scalable backend with easy REST API creation.
- **Supabase**: Free-tier managed PostgreSQL with a simple JS SDK for database operations.
- **OpenAI API**: Reliable, accessible LLM with flexible summarization capabilities.
- **Slack Webhook**: Simple way to integrate Slack notifications without a complex OAuth app.
- **ES6+ Syntax**: Clean, modern JavaScript code across both client and server.

**Notable Notes**:

- Separate services (`openaiService.js`, `slackService.js`) for clean, modular code.
- Success/failure notifications shown via React state.
- Summarize button disabled while sending to avoid multiple calls.
- All environment variables are securely stored using `.env`.

## ✨ Author

Narendra Chillal
[GitHub](https://github.com/Narendrachillal) | [LinkedIn](https://www.linkedin.com/in/narendra-chillal-5b7669207)

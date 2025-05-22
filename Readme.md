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


---

## ⚙️ Setup Instructions

### 🔧 Backend Setup

1. Go to `server/` directory  :
```cd server```
3. Install dependencies  : ```npm i```

4. Create a `.env` file (based on `.env.example`) and add your keys:
```
PORT=5000
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_key
OPENAI_API_KEY=your_openai_api_key
SLACK_WEBHOOK_URL=your_slack_webhook_url
```

4. Start the backend server
   ```npm run dev```

---

### 🎨 Frontend Setup

1. Go to `client/` directory  
```
cd client
```

2. Install dependencies  
```
npm install
```

3. Start the frontend development server  
``` npm run dev```


## 📝 LLM (OpenAI) Setup Guide

1. Create a free account at [OpenAI](https://platform.openai.com/).
2. Go to API Keys in the OpenAI dashboard.
3. Generate a new secret key.
4. Add this key to your backend `.env` file as: OPENAI_API_KEY=your_openai_key
5. The app uses the `gpt-3.5-turbo` model via their `/v1/chat/completions` endpoint.

---

## 📣 Slack Webhook Setup Guide

1. Go to your Slack workspace.
2. Navigate to **Settings → Integrations → Incoming Webhooks**.
3. Click **Add New Webhook to Workspace**.
4. Choose the target channel and authorize.
5. Copy the generated webhook URL.
6. Add this to your backend `.env` file as: SLACK_WEBHOOK_URL=your_webhook_url




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

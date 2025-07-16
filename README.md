# 💬 AI-Powered Chat App | 基于 AI 的智能聊天应用

A full-stack chat application built with **React**, **Node.js**, **Express**, and **MongoDB**, enhanced with **Gemini API (Google)** to provide **AI-generated reply suggestions**.

这是一个使用 **React + Node.js + Express + MongoDB** 构建的全栈聊天应用，集成了 **Gemini API（Google）**，实现了智能 **AI 推荐回复功能**。

---

## 🚀 Features | 功能亮点

### 🔐 Authentication | 用户认证
- User registration and login
- JWT-based session management

### 💬 Real-Time Chat | 实时聊天
- Send and receive text messages
- Upload and display image messages
- Messages stored in MongoDB

### 💡 AI Reply Suggestions | AI 智能回复建议
- Click “💡 AI Suggest” to get auto-generated replies
- Powered by Gemini API (Google Generative AI)
- Suggests 2–3 friendly responses based on context

### 🧩 Tech Stack | 技术栈
- **Frontend**: React, Tailwind CSS, Axios
- **Backend**: Node.js, Express, Google Generative AI SDK
- **Database**: MongoDB + Mongoose

---

## 🎯 Use Case | 应用场景示例

**Incoming Message:**

> "Hey, are we still meeting at 3 PM?"

**AI Suggestions:**

- ✅ Sure, see you then!
- ⏳ Maybe we can postpone it a bit?
- ❌ Sorry, I can't make it.

---

## 📸 Screenshots | 应用截图

> 可在后续版本中加入截图（聊天页面、AI建议等）

---

## 🛠️ Project Structure | 项目结构

```

chat-app/
├── client/          # Frontend - React
├── server/          # Backend - Express
├── models/          # Mongoose schemas
├── routes/          # API routes
├── controllers/     # Controller logic
├── utils/           # Formatters, JWT helpers
├── .env             # Environment config
└── README.md

````

---

## ⚙️ Setup Instructions | 快速部署

### 1. Clone the repo 克隆项目

```bash
git clone https://github.com/elanyin/chat-app.git
cd chat-app
````

### 2. Setup Backend 设置后端

```bash
cd server
npm install
# .env 中配置 MONGODB_URI 与 GEMINI_API_KEY
npm run dev
```

### 3. Setup Frontend 设置前端

```bash
cd ../client
npm install
npm run dev
```

---

## 🔑 Environment Variables | 环境变量

`.env` 文件中配置以下内容：

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GEMINI_API_KEY=your_google_generative_ai_api_key
```

---

## 🤖 AI Integration | AI 接入逻辑

* Backend: `/api/suggest` endpoint sends user messages to Gemini API.
* Gemini generates reply options (max 3), returned to frontend.
* Frontend displays suggestions below the selected message.

---

## 📌 Future Plans | 未来计划

* ✅ AI reply suggestions (已完成)
* [ ] Typing indicators
* [ ] Online user status
* [ ] Group chat support
* [ ] Message read receipts
* [ ] Voice message + STT/AI reply

---

## 👨‍💻 Author

**Yulong Yin (Elan)**
📍 Monash University Malaysia - Master of Artificial Intelligence
🔗 [LinkedIn](https://www.linkedin.com/in/yulong-yin-a35320285/) | [GitHub](https://github.com/elanyin)

---

## 📄 License

MIT License © 2025 Elan Yin


---

## 🧠 Smart Chat App – AI Reply Suggestions

### ✅ Current Features

| Module             | Functionality                                                                      |
| ------------------ | ---------------------------------------------------------------------------------- |
| 👤 **User System** | Registration, login, and JWT-based authentication                                  |
| 💬 **Chat Logic**  | Message storage in MongoDB with basic chat UI implemented in frontend              |
| 📦 **Tech Stack**  | Built using **React**, **Node.js**, **Express**, **MongoDB**, and **Mongoose**     |
| 📁 **Structure**   | Clear folder separation, fully decoupled frontend and backend, basic docs included |

---

### 🎯 Goal

After a user receives a message, the system **automatically calls the Gemini (Google) API** to generate **multiple smart reply suggestions**.

#### 🔄 Example Use Case:

* **Incoming message**: “Hey, are we still meeting at 3 PM?”
* **AI Suggestions**:

  * 👍 Sure, see you then!
  * ⏳ Maybe we can postpone it a bit?
  * ❌ Sorry, I can't make it.

---

### 🧩 Key Components

| Component           | Technology                                                 | Description                                                        |
| ------------------- | ---------------------------------------------------------- | ------------------------------------------------------------------ |
| **Frontend Button** | React                                                      | Clickable "💡 AI Suggest" button on each message                   |
| **Backend API**     | Node.js + Gemini API                                       | Sends user message to Gemini and receives suggested replies        |
| **Data Flow**       | `message → prompt → Gemini API → suggestions → UI display` |                                                                    |
| **Rate Limiting**   | Backend logic                                              | Prevents abuse: e.g. limit suggestions per message or add cooldown |

---

### 🔁 Interaction Flow

1. **User** hovers over or selects a message received from another user.
2. **"💡 AI Suggest"** button appears.
3. On click, **frontend sends** the selected message to the **backend**.
4. **Backend** sends prompt to **Gemini API** and retrieves suggested replies.
5. **Frontend** displays the suggestions below the message, and user can **click one to send** instantly.

---

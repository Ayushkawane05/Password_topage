# 🔐 Secret Login Page

A simple, responsive, and visually appealing password-protected login system built using **Node.js (Express)** and **HTML/CSS**. It demonstrates how to use middleware to secure routes and create an elegant front-end experience.

---

## 📌 Features

- ✅ Password-only login (no username)
- ✅ Route-level middleware for protection
- ✅ Minimal and clean project structure
- ✅ Responsive, multicolor gradient UI
- ✅ Easy to customize password in `app.js`
- ✅ Ideal for beginners learning Express and authentication flow

---

## 📁 Project Structure

Password_topage/
├── public/
│ ├── index.html # Login form page
│ └── secret.html # Hidden page for successful login
├── app.js # Express server file
├── .gitignore # (Optional) Node ignore file
└── README.md # This file


## 🚀 How to Run Locally

1. **Clone the repository**:

```bash
git clone https://github.com/Ayushkawane05/Password_topage.git
cd Password_topage
```
2. **Install dependencies:**
```bash
npm install
```

3. **Start the server:**
```bash
node app.js

```
4. **Open in browser:**
```bash
http://localhost:3000
```

🔐 Default Password
The password is hardcoded as:
login@12

You can change it in app.js inside the passwordcheck middleware function.

🛠 Tech Stack
Node.js

Express.js

HTML5 & CSS3 (Custom Styling)

Git for version control

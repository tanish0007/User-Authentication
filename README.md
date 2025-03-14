# User Authentication System

Secure your **MERN Stack App** with **JWT-Based User Authentication and Authorization**

---
## Features
✔️ User Signup  
✔️ User Login  
✔️ Password Encryption with **bcrypt**  
✔️ JWT-based Authentication  
✔️ Protected Routes  
✔️ Cookie-based Session Handling

---

## Technologies 

### **Frontend**
- React.js
- React Router
- Axios
- React Toastify
- React Cookie

### **Backend**
- Node.js
- Express.js
- MongoDB 
- Bcrypt
- JWT (jsonwebtoken)
- Mongoose
- Dotenv
- CORS
- Cookie-Parser

---

## Installation

### 1️⃣ **Clone the repository**
```bash
git clone https://github.com/tanish0007/User-Authentication.git
cd User-Authentication
```

### 2️⃣ **Setup Backend**
- Navigate to the `server` folder:
```bash
cd server
```
- Install dependencies:
```bash
npm install
```
- Create a `.env` file:
```bash
touch .env
```
- Add the following environment vairbles to `.env`:
```.env
MONGO_URL = "path of your MongoDB connection string"
TOKEN_KEY = /* write a secret key */
PORT = 4040 
```
- Start the backend server:
```bash
npm start
```

### 3️⃣ **Setup Frontend**
- Open a new terminal window and navigate to the `client` folder:
```bash
cd ../client
```
- Install dependencies:
```bash
npm install
```
- Start the frontend:
```bash
npm start
```
---

## Project Structure

```plaintext
📦 User-Authentication
├── 📂 client
│   ├── 📂 node_modules
│   ├── 📂 public
│   ├── 📂 src
│   │   ├── 📂 pages
│   │   │   ├── 📄 Home.jsx
│   │   │   ├── 📄 index.js
│   │   │   ├── 📄 Login.jsx
│   │   │   └── 📄 Signup.jsx
│   │   ├── 📄 App.js
│   │   └── 📄 index.css
│   │   └── 📄 index.js
│   └── 🚫 .gitignore
│   └── 📦 package-lock.json
│   └── 📦 package.json
├── 📂 server
│   ├── 📂 Controllers
│   │   ├── 📄 AuthController.js
│   ├── 📂 Middlewares
│   │   └── 📄 AuthMiddleware.js
│   ├── 📂 Models
│   │   └── 📄 UserModel.js
│   ├── 📂 node_modules
│   ├── 📂 Routes
│   │   └── 📄 AuthRoutes.js
│   ├── 📂 util
│   │   └── 📄 SecretToken.js
│   ├── 🌍 .env
│   ├── 🚫 .gitignore
│   ├── 📄 index.js
│   ├── 📦 package-lock.json
│   └── 📦 package.json
├── 🪪 LICENSE
└── 📝 README.md
```
---

<h1 align="center"> <b> You're good to go!😉 </b> </h1>
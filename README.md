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
- navigate to the server folder:
```bash
cd server
```
- install dependencies:
```bash
npm install
```
- create a .env file:
```bash
touch .env
```
- add the following environment vairbles to .env:
```ini
MONGO_URL = "path of your MongoDB connection string"
TOKEN_KEY = /* write a secret key */
PORT = 4040 
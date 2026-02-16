
---

# 🛒 QuickCart – MERN E-Commerce Application (Backend)

QuickCart is a full-stack E-Commerce web application built using the **MERN Stack**.
This repository currently contains the **Backend (Node.js + Express + MongoDB)** API for managing users, products, orders, authentication, and payments.

Frontend will be pushed separately.

---

## Tech Stack

* **Node.js**
* **Express.js**
* **MongoDB**
* **Mongoose**
* **JWT Authentication**
* **Cloudinary** (for image storage)
* **Stripe** (for payments)

---

## Features

* User Registration & Login (JWT Auth)
* Role-based Authorization (Admin/User)
* Product Management (CRUD)
* Order Management
* Cart System
* Secure Password Hashing (bcrypt)
* Environment-based configuration
* Error Handling Middleware
* Production-ready API structure

---

## Project Structure

```
backend/
│
├── config/
├── controllers/
├── middleware/
├── models/
├── routes/
├── utils/
├── app.js
├── server.js
└── package.json
```

---

##  Environment Variables

Create a `.env` file in the root directory and add:

```
PORT=4000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
JWT_EXPIRE=7d
COOKIE_EXPIRE=7

CLOUDINARY_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

STRIPE_SECRET_KEY=your_stripe_secret
```

---

## Installation & Setup

```bash
# Install dependencies
npm install

# Run in development
npm run dev

# Run in production
npm start
```

---

##  API Base URL

```
http://localhost:4000/api/v1
```

---

##  Authentication

This project uses **JWT (JSON Web Tokens)** for secure authentication and protected routes.

---

##  Future Enhancements

* Push frontend (React)
* Add payment webhooks
* Add product reviews
* Admin dashboard analytics
* Deploy on AWS / Render / Vercel

---

## License

This project is licensed under the MIT License.

---

##  Author

**Ankit Dimri**
Full-Stack Developer | MERN & Machine Learning Enthusiast

📍 Dehradun, India

[![GitHub](https://img.shields.io/badge/GitHub-AnkitDimri4-black?logo=github)](https://github.com/AnkitDimri4)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Ankit%20Dimri-blue?logo=linkedin)](https://linkedin.com/in/ankit-dimri-a6ab98263)
[![LeetCode](https://img.shields.io/badge/LeetCode-Profile-orange?logo=leetcode)](https://leetcode.com/u/user4612MW/)

![JavaScript](https://img.shields.io/badge/Language-JavaScript-yellow?logo=javascript)
![Node.js](https://img.shields.io/badge/Backend-Node.js-green?logo=node.js)
![Express.js](https://img.shields.io/badge/Framework-Express-black?logo=express)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-green?logo=mongodb)
![Status](https://img.shields.io/badge/Status-Active-brightgreen)
![Version](https://img.shields.io/badge/Version-1.0-blue)

![License](https://img.shields.io/badge/License-MIT-green)

---

<div align="center">
    Created by <b>Ankit Dimri</b> © 2026
</div>

---


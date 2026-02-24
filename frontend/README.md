
---

# 🛒 QuickCart - Ecommerce Frontend

> **QuickCart** is a modern full-stack ecommerce frontend application built using **React, Redux, Material UI, Stripe payment integration, and REST API communication using Axios**.

The project provides a complete ecommerce shopping experience including product browsing, cart management, authentication, order processing, and admin dashboard.

---

---

## Project Screenshots

### UI Preview

| ![img1](https://github.com/user-attachments/assets/93a15a4a-7357-465a-a9e7-332493bd0002) | ![img2](https://github.com/user-attachments/assets/33ce5548-26be-4ada-b385-a697c73b7ef8) | ![img3](https://github.com/user-attachments/assets/5fc3aff4-c5fe-4357-92e9-6f078a243502) 
|-------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------|
| ![img4](https://github.com/user-attachments/assets/edd1acd3-cff0-4c4d-a5b1-972b49fda2e2) | ![img5](https://github.com/user-attachments/assets/c0ac5cb3-8654-4b3d-9b51-de218058464f) | ![img6](https://github.com/user-attachments/assets/f6cf1e1a-3fa8-4f01-bf8e-cdbec67234c4) 
| ![img7](https://github.com/user-attachments/assets/576dddd4-eb13-4eae-a87e-7c05a3074527) | ![img8](https://github.com/user-attachments/assets/508074b4-1e2e-46db-8288-50c8a5e693a3) | ![img9](https://github.com/user-attachments/assets/e51fd885-b93e-453a-bf5b-f76c03c25dd1) 
| ![img10](https://github.com/user-attachments/assets/69418177-ee4f-4560-b44d-0523ef59795e) | ![img11](https://github.com/user-attachments/assets/f60f0b9f-4a45-451f-9ff6-c25481e0551f) | ![img12](https://github.com/user-attachments/assets/2e4e9335-ed00-495e-bdbd-755fb77baa6e) 
| ![img13](https://github.com/user-attachments/assets/b2ac65e8-8c12-4b04-9de4-2d953e6c5043) | ![img14](https://github.com/user-attachments/assets/2799900a-98dc-4d72-b675-ac2f59aedf0f) | ![img15](https://github.com/user-attachments/assets/429efbf3-ae46-4583-91cf-0e4abdb80091) 
| ![img16](https://github.com/user-attachments/assets/871dfa61-c84f-48da-92e1-61b0179852f0) | ![img17](https://github.com/user-attachments/assets/af50924d-4e99-45e5-ab4f-ed66b75241dd) | ![img18](https://github.com/user-attachments/assets/4e99d202-66f9-4d05-b706-bc34679e632d) 
| ![img19](https://github.com/user-attachments/assets/9dfceeef-8945-4d84-bf0a-936d2dc13982) | ![img20](https://github.com/user-attachments/assets/b702dc76-6059-4aaf-9bbf-f4918b26bbf6) | ![img21](https://github.com/user-attachments/assets/6d44569c-69c2-495c-b929-dba06a0846cd) 
| ![img22](https://github.com/user-attachments/assets/b8862fcc-98ef-4905-9004-0db099d174a7) | ![img23](https://github.com/user-attachments/assets/a19297a7-ad41-4e2e-bc20-066e64f203c7) | ![img24](https://github.com/user-attachments/assets/98c3129a-674f-4932-b608-3d14fd743d27) 
| ![img25](https://github.com/user-attachments/assets/31c8ee4a-ae14-4fc6-858a-84674107afb2) | ![img26](https://github.com/user-attachments/assets/0673d60a-8337-4826-b033-ca50632fed6a) | ![img27](https://github.com/user-attachments/assets/c2c62936-e61e-4910-8765-a612a2497c9e) 
| ![img28](https://github.com/user-attachments/assets/dce7bbd4-9e27-4cee-b41b-6706dbad1d06) | ![img29](https://github.com/user-attachments/assets/20da398b-30d0-4be2-9814-d0384f8a146c) | ![img30](https://github.com/user-attachments/assets/1cdae0d9-d1ea-48a8-9b75-6da1a6036015) 
| ![img31](https://github.com/user-attachments/assets/b64ff2eb-d801-4fbe-8e7f-fef7b38d3184) | ![img32](https://github.com/user-attachments/assets/261a2537-eb14-4c2a-ab6d-f83ed9b35440) | ![img33](https://github.com/user-attachments/assets/3199c71a-cd4f-45d8-85c3-3a2e69455a24) 
| ![img34](https://github.com/user-attachments/assets/a59bfc3e-ae03-4995-9935-8cec2bdb61cb) | ![img35](https://github.com/user-attachments/assets/e7fa9be1-e6c2-4cd2-863a-0821ea7090e5) | ![img36](https://github.com/user-attachments/assets/b47f3dbd-afa6-42bd-911c-054a2e55a661) 


---

## Features

### User Features
- User Authentication (Login / Signup)
- Profile Management
- Product Search and Filtering
- Cart Management
- Order Placement
- Stripe Payment Integration

### Admin Features
- Product Management (Add / Update / Delete)
- Order Processing
- User Management
- Reviews Management

### UI Features
- Responsive Design
- Material UI Components
- Toast Notifications
- Carousel Product Display

---

## Tech Stack

### Frontend
- React.js  
- Redux  
- React Router DOM  
- Material UI  
- Axios  
- Chart.js  
- Stripe Payment  
- React Toastify  

---

## Project Structure

```
frontend/
│
├── public/
├── src/
│   ├── actions/
│   ├── components/
│   │   ├── Admin
│   │   ├── Cart
│   │   ├── Home
│   │   ├── Product
│   │   ├── User
│   │   └── layout
│   ├── reducers/
│   ├── store.js
│   ├── axios.js
│   └── App.js
│
└── package.json
```


## Architecture

```txt
Client (React)
   ↓
Redux State Management
   ↓
Axios API Calls
   ↓
Node.js Express Backend
   ↓
MongoDB Database
```


---

##  Installation

### 1. Clone Repository
```bash
git clone https://github.com/AnkitDimri4/quickcart-mern.git
```

### 2. Install Dependencies
```bash
npm install --legacy-peer-deps
```

### 3. Start Development Server
```bash
npm start
```

Frontend will run at:
```
http://localhost:3000
```

---

##  Environment Variables

Create `.env` file:

```env
REACT_APP_API_URL=https://your-backend-url.onrender.com
REACT_APP_STRIPE_KEY=your_stripe_key
```

⚠ Never upload `.env` to GitHub.

---

---

## Authentication Flow

```
Frontend → Axios API → Backend Authentication → Cookie Token → Redux State Update
```

---

## Payment Integration

- Stripe Checkout
- Secure payment processing
- Order confirmation system

---

## Author

**Ankit Dimri**   

Full-stack Developer
📍 Dehradun, India  

[![GitHub](https://img.shields.io/badge/GitHub-AnkitDimri4-black?logo=github)](https://github.com/AnkitDimri4)  [![LinkedIn](https://img.shields.io/badge/LinkedIn-Ankit%20Dimri-blue?logo=linkedin)](https://linkedin.com/in/ankit-dimri-a6ab98263)  [![LeetCode](https://img.shields.io/badge/LeetCode-Profile-orange?logo=leetcode)](https://leetcode.com/u/user4612MW/)  
  ![License](https://img.shields.io/badge/License-MIT-green)  ![Status](https://img.shields.io/badge/Status-Active-brightgreen)  

---

<div align="center">
    Created by <b>Ankit Dimri</b>© 2026
</div>  


---

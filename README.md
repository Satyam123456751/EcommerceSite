https://github.com/Satyam123456751/EcommerceSite/releases/download/v1.0/WhatsApp.Video.2026-05-14.at.7.09.35.AM.mp4
# 🛍️ Hayroo Ecommerce (MERN Stack)

## 🌐 Live Demo

**[View Live Application](https://ecommercesite-1-s5qw.onrender.com)** 🚀


A full-featured **Ecommerce Web Application** built using the **MERN stack (MongoDB, Express.js, React.js, Node.js)**.  
It includes user authentication, product management, order handling, payments, and an admin dashboard.

---

## 🚀 Features

### 👥 User & Admin
- JWT-based authentication and authorization  
- Role-based access control (`role: 1` for admin, `role: 0` for user)
- Admin can manage products, categories, and orders

### 🛒 Ecommerce Functionality
- Product listing and filtering by category
- Product customization feature
- Secure checkout process using **Braintree Payment Gateway**
- Order tracking and management

### ⚙️ Backend Highlights
- Express.js and Node.js RESTful API
- MongoDB with Mongoose for database management
- Automatic creation of upload directories for product images
- Middleware for authentication and logging

---
## ⚡ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/Satyam123456751/EcommerceSite.git
cd EcommerceSite


2️⃣ Install Dependencies
npm install

3️⃣ Configure Environment Variables

Create a .env file in the root directory and add:

PORT=8000
DATABASE=mongodb+srv://<your-mongo-db-uri>
BRAINTREE_MERCHANT_ID=<your-braintree-merchant-id>
BRAINTREE_PUBLIC_KEY=<your-braintree-public-key>
BRAINTREE_PRIVATE_KEY=<your-braintree-private-key>
JWT_SECRET=<your-secret-key>

4️⃣ Run the Server
npm start


or

node app.js


You should see:

============== Mongodb Database Connected Successfully ==============
Server is running on 8000

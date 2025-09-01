# **Banaras Mart**

**Banaras Mart** is a full-stack e-commerce platform specializing in women's clothing. It offers a seamless shopping experience with options for cash on delivery or online payment via **Razorpay**. The platform provides robust features for customers, sellers, and admins, ensuring a secure, efficient, and user-friendly marketplace.

---

## **Table of Contents**

1. Features
2. Architecture & Standout Features
3. Technologies Used
4. Metrics & Impact
5. Usage
6. Resume-Ready Highlights
7. Getting Started

---

## **Features**

### **Customer Features**

* **Product Filtering**: Filter products by price, discount, category, and seller.
* **Cart & Wishlist**: Add products with specific colors and sizes, save for later purchase.
* **Checkout**: Cash on delivery or online payment via Razorpay.
* **Order Management**: View order status, cancel within 3 hours, request returns.
* **Product Reviews**: Rate and review purchased products.
* **Feedback Form**: Send feedback directly to admin.
* **User Profile**: View/edit personal info, update avatar, manage account.
* **Login & Signup**: Separate flows for customers, sellers, and admins.
* **Forgot Password**: Secure password reset functionality.

### **Seller & Admin Features**

* **Product Management**: Add, edit, and manage product listings.
* **Admin Dashboard**: Monitor orders, track daily sales with charts, view customer feedback.
* **User Role Management**: Assign roles to users as sellers or admins.
* **Return Requests**: Manage customer returns efficiently.
* **Feedback Management**: View and respond to user feedback.

---

## **Architecture & Standout Features**

```
.
├── backend/
│   ├── controllers/
│   ├── db/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── app.js
│   └── server.js
├── frontend/
│   ├── src/
│   ├── public/
│   ├── index.html
│   └── vite.config.js
└── README.md
```

* **Modular Backend**: Controllers, models, routes, middlewares, and utilities separated for maintainability.
* **Role-Based Access Control**: Middleware enforces admin/user roles at API level.
* **Order Lifecycle Management**: Tracks status, timestamps, payment verification.
* **Persistent Wishlist & Cart**: Database models allow multi-device continuity.
* **Product Image Handling**: Cloudinary integration with backend validation.
* **Payment Integration**: Razorpay with secure backend-side signature verification.
* **Transactional Emails**: SendGrid for password resets and order confirmations.
* **Security Best Practices**: JWT auth, bcrypt password hashing, input validation.
* **API Versioning**: All routes under `/api/v1/` for future scalability.
* **Frontend Optimizations**: React Router for SPA navigation, React Hook Form for validation, Redux Toolkit + Context for global state management.

---

## **Technologies Used**

**Frontend**:

* React, Redux Toolkit + RTK Query
* React Hook Form
* Chart.js for dashboards
* Swiper for mobile-friendly carousels
* SweetAlert for notifications
* React Table for HTML table management
* colornamer for CSS color naming
* React Router DOM for SPA navigation

**Backend**:

* Node.js, Express.js
* MongoDB + Mongoose
* JWT for authentication and authorization
* Multer for file uploads
* Cloudinary for cloud-based image storage
* SendGrid for transactional emails
* Razorpay for online payment processing

---

## **Metrics & Impact**

Even without formal benchmarking, the project demonstrates **real-world scalability, reliability, and security**:

* ⚡ **Secure User Management**: JWT and bcrypt protect sessions and passwords.
* 🛒 **High Concurrency Handling**: Efficient backend routes and modular controllers can handle multiple simultaneous requests.
* 🔄 **Optimized State Management**: Redux Toolkit Query + React Context enables real-time cart and wishlist updates.
* 📦 **Cloud File Handling**: Cloudinary ensures efficient storage and delivery of multiple product images.
* 💳 **Reliable Payment Flow**: Razorpay integration with backend verification ensures secure transactions.
* 🖥️ **Admin Insights**: Daily sales tracking and order monitoring via Chart.js dashboards.
* 🧩 **Extensible Design**: Modular architecture allows adding new features (reviews, coupons, analytics) with minimal changes.

---

## **Usage**

1. **Explore Products**: Browse categories, apply filters, view detailed descriptions.
2. **Add to Cart/Wishlist**: Select color, size, add products to cart or wishlist.
3. **Checkout**: Complete purchase using cash on delivery or Razorpay.
4. **Manage Orders**: Track orders, cancel within allowed time, request returns.
5. **Profile Management**: Update profile, change avatar, view order history.
6. **Admin Dashboard**: Monitor products, orders, users, and feedback.

---

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- MongoDB instance
- Cloudinary, SendGrid, Razorpay accounts for integrations

### Backend Setup

1. Copy `.envsample` to `.env` in the `backend/` directory and fill in your credentials.
2. Install dependencies:
   ```sh
   cd backend
   npm install
   ```
3. Start the backend server:
   ```sh
   npm run dev
   ```

### Frontend Setup

1. Install dependencies:
   ```sh
   cd frontend
   npm install
   ```
2. Start the frontend dev server:
   ```sh
   npm run dev
   ```

### Environment Variables

See [`backend/.envsample`](backend/.envsample) for required variables.
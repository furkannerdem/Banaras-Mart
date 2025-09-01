# Developer Logs – Banaras-Mart

This document records key challenges faced during the development of Banaras-Mart and how the team addressed them.

---

## 1. **Authentication & Authorization**

**Problem:**  
Implementing secure authentication with JWT, including refresh tokens and role-based access, was complex. Handling token expiry and ensuring only admins could access certain routes required careful middleware design.

**Solution:**  
- Developed custom middleware to verify JWTs and check user roles.
- Implemented refresh token logic to maintain sessions securely.
- Wrote comprehensive tests to ensure all protected routes were inaccessible without proper credentials.

---

## 2. **Image Uploads & Management**

**Problem:**  
Handling product image uploads, especially large files and multiple images per product, was challenging. Local storage was not scalable, and image transformation was needed.

**Solution:**  
- Integrated Cloudinary for cloud-based image storage and transformation.
- Added backend validation for file types and sizes.
- Provided users with instant feedback on upload status in the frontend.

---

## 3. **Payment Integration**

**Problem:**  
Integrating Razorpay required secure backend order creation and signature verification. Handling asynchronous payment status updates and failures was tricky.

**Solution:**  
- Moved all sensitive payment logic to the backend.
- Implemented webhook handling for payment status updates.
- Added robust error handling and user notifications for payment failures.

---

## 4. **Cart & Wishlist Persistence**

**Problem:**  
Ensuring cart and wishlist data persisted across devices and sessions, and merged correctly when a guest user logged in, was non-trivial.

**Solution:**  
- Stored cart and wishlist in the database, linked to user accounts.
- On login, merged guest cart/wishlist with the user's existing data.
- Wrote utility functions to handle merging logic and resolve conflicts.

---

## 5. **API Error Handling & Consistency**

**Problem:**  
Inconsistent error responses made debugging and frontend integration difficult.

**Solution:**  
- Centralized error handling middleware in Express.
- Standardized API error response format across all endpoints.
- Logged errors for easier debugging in development and production.

---

## 6. **Frontend State Management**

**Problem:**  
Managing global state for authentication, cart, and wishlist without introducing unnecessary complexity.

**Solution:**  
- Used React Context and custom hooks for global state.
- Kept state logic modular and reusable.
- Ensured state synced with backend and persisted in localStorage for guests.

---

## 7. **Testing & Code Quality**

**Problem:**  
Maintaining code quality and preventing regressions as the codebase grew.

**Solution:**  
- Set up ESLint and Prettier for consistent code style.
- Wrote unit and integration tests for critical backend logic.
- Added pre-commit hooks to enforce linting and testing before pushes.

---

## 8. **Deployment & Environment Management**

**Problem:**  
Managing environment variables and secrets for different environments (development, staging, production).

**Solution:**  
- Used dotenv for local development.
- Provided `.envsample` for onboarding.
- Documented all required environment variables in the README.

---

*These logs are updated regularly to reflect ongoing development and solutions.*
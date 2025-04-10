
# 📚 BookMartX – Buy & Sell Books Easily

**BookMartX** is a full-stack web application that allows users to buy and sell books—whether new, used, or second-hand—at affordable prices. It bridges the gap between book owners and readers who are looking for affordable alternatives, creating a simple and effective book exchange platform.

---

## 🔧 Features

- 📖 List books for sale with images, descriptions, and prices.
- 🔍 Browse books available from different sellers.
- 👤 User and Seller authentication & validation.
- 💬 Contact seller functionality (extendable to chat/email).
- 📁 Image upload support for listed books.
- 📱 Responsive and user-friendly frontend using EJS templates.

---

## 🚀 Project Folder Structure

```
BookMartX/
├── css/                   # Styling files
├── img/                   # Static images
├── js/                    # Client-side scripts
├── middleware/            # Middleware functions
├── model/                 # Mongoose models
│   ├── usermodel.js
│   └── sellermodel.js
├── node_modules/          # Installed npm packages
├── router/                # Route definitions
│   ├── basicroutes.js
│   ├── userroutes.js
│   └── sellerroutes.js
├── sellerJs/              # Seller-side JS logic
├── userJs/                # User-side JS logic
├── uploads/               # Uploaded book images
├── views/                 # EJS view templates
└── app.js / server.js     # Main server file
```

---

## 🛠️ Installation & Execution

### 🔃 Prerequisites

- Node.js and npm installed.
- MongoDB running locally or cloud (MongoDB Atlas).
  
### 📦 Installation Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/gnana27022003/BookMartX-sell-or-buy-books.git
   cd BookMartX-sell-or-buy-books
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up MongoDB connection**:

   Inside your `server.js` or any MongoDB config file, update the connection URI:
   ```js
   mongoose.connect("mongodb://localhost:27017/bookmartxDB", {
     useNewUrlParser: true,
     useUnifiedTopology: true
   });
   ```

4. **Run the server**:
   ```bash
   node server.js
   ```

5. **Visit the App**:  
   Open your browser and go to:  
   [http://localhost:3003](http://localhost:3003)

---

## 📌 Future Enhancements

- Add secure payment integration (like Razorpay/Stripe).
- Enable chat feature between users and sellers.
- Deploy app to cloud (e.g., Render, Vercel, or Heroku).
- Add category filters, location-based listings, and more.

---

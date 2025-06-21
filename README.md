# Node.js Product API

This is a simple REST API built with Node.js and Express.js for managing products. It uses a JSON file (`products.json`) to store data, with support for creating, viewing, and deleting products.

---

## 📦 Features

- `GET /products` — Get all products
- `POST /products` — Add a new product
- `DELETE /products/:id` — Delete a product by ID

---

## 🚀 Getting Started

### 📁 Clone the repo

```bash
git clone https://github.com/Rishitha-2106/nodejs-product-api.git
cd nodejs-product-api
📦 Install dependencies
bash
npm install
▶️ Run the server
bash
node index.js
Server will start at:
📍 http://localhost:3000

🧪 Testing the API with cURL
📍 View all products

curl http://localhost:3000/products
➕ Add a product

curl -X POST http://localhost:3000/products \
  -H "Content-Type: application/json" \
  -d "{\"name\": \"Tablet\", \"price\": 300}"
❌ Delete a product

curl -X DELETE http://localhost:3000/products/2
🛠 Technologies Used
Node.js
Express.js
File System (fs)
JSON data storage

💡 Optional Improvements (if more time)
Add PUT endpoint for editing products

Add validation for inputs

Replace JSON with database (MongoDB, SQLite)

Add UI to view/manage products



---

## ✅ Final Checklist Before Pushing to GitHub

1. Make sure you have these files in your folder:
   - `index.js`
   - `products.json`
   - `package.json`
   - `README.md`

2. Then run the following in terminal inside your project folder:

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/Rishitha-2106/nodejs-product-api.git
git push -u origin main

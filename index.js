const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;


app.use(express.json());

// Load products from JSON
//let products = require('./products.json');
let products = JSON.parse(fs.readFileSync('./products.json'));

app.get('/', (req, res) => {
  res.send('Welcome to the Product API!');
});


// GET all products
app.get('/products', (req, res) => {
  res.json(products);
});

// POST new product
app.post('/products', (req, res) => {
  const newProduct = {
    id: products.length + 1,
    name: req.body.name,
    price: req.body.price
  };
  products.push(newProduct);
  fs.writeFileSync('./products.json', JSON.stringify(products, null, 2));
  res.status(201).json(newProduct);
});

// DELETE product by ID
app.delete('/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  products = products.filter(p => p.id !== productId);
  fs.writeFileSync('./products.json', JSON.stringify(products, null, 2));
  res.json({ message: `Product with id ${productId} deleted.` });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

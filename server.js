<<<<<<< HEAD
require('dotenv').config();
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const client = require('./config/database');
=======
const express = require("express");
const path = require("path");
require("dotenv").config();
>>>>>>> 5d20a3cf83bfee13da122b1e5107053820981dae

const app = express();

// Middleware
<<<<<<< HEAD
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Serve HTML pages
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'register.html'));
});

app.get('/partials/navbar', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'partials', 'navbar.html'));
});

app.get('/auth/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'auth', 'login.html'));
});

// Handle POST request
app.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).send("Please fill all fields.");
  }

  try {
    await client.query(
      'INSERT INTO public.form_data(name, email, password) VALUES ($1, $2, $3)',
      [name, email, password]
    );
    res.send("Registration successful!");
  } catch (err) {
    console.error("Error inserting data:", err);
    res.status(500).send("Error saving data.");
  }
});

// Start server only once
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
=======
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files (CSS, JS, images, etc.)
app.use(express.static(path.join(__dirname, "public")));

// Serve Home Page (HTML)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

// Serve Navbar (Partial)
app.get("/partials/navbar", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "partials", "navbar.html"));
});

// Serve Login Page
app.get("/auth/login", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "auth", "login.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
>>>>>>> 5d20a3cf83bfee13da122b1e5107053820981dae

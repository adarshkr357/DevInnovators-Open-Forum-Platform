require('dotenv').config();
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const client = require('./config/database');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Serve HTML pages
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'register.html'));
});

app.get('/partials/navbar', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'partials', 'navbar.html'));
});

app.get('/auth/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'auth', 'login.html'));
});

app.get('/profile', (req, res) => {
  res.sendFile(path.join(__dirname , 'views', 'profile.html'));
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

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files (CSS, JS, images, etc.)
app.use(express.static(path.join(__dirname, "public")));

app.use('/api/profile', require('./routes/profile'));

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

// Start server only once
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
// Dashboard page 
// server/server.js
const http = require('http');
const url = require('url');
const { handleGetTopics } = require('./routes');

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);

    // Handle CORS
res.setHeader('Access-Control-Allow-Origin', '*');
res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        res.end();
        return;
    }

    // Routing
    if (req.url === '/api/topics' && req.method === 'GET') {
        return handleGetTopics(res);
    }

    res.writeHead(404);
    res.end('Not Found');
});

server.listen(5000, () => {
    console.log('Server running on http://localhost:5000');
});

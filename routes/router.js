const express = require("express");
const router = express.Router();

// Import route handlers
const aboutRoutes = require("./about");
const dashboardRoutes = require("./dashboard");
const notificationsRoutes = require("./notifications");
const settingsRoutes = require("./settings");
const helpRoutes = require("./help");
const searchRoutes = require("./search");
const adminRoutes = require("./admin");
const categoriesRoutes = require("./categories");
const profileRoutes = require("./profile");
const threadRoutes = require("./thread");
const newThreadRoutes = require("./new-thread");
const authRoutes = require("./auth");
const homeRoutes = require("./index");
const navbarRoutes = require("./navbar");

// Use routes
router.use("/about", aboutRoutes);
router.use("/dashboard", dashboardRoutes);
router.use("/notifications", notificationsRoutes);
router.use("/settings", settingsRoutes);
router.use("/help", helpRoutes);
router.use("/search", searchRoutes);
router.use("/admin", adminRoutes);
router.use("/categories", categoriesRoutes);
router.use("/profile", profileRoutes);
router.use("/thread", threadRoutes);
router.use("/new-thread", newThreadRoutes);
router.use("/auth", authRoutes);
router.use("/partials", navbarRoutes); // navbar route
router.use("/", homeRoutes); // Home page route

module.exports = router;

//Dashboard Page //routes.js
// server/routes.js
const pool = require('./db');

async function handleGetTopics(res) {
    try {
        const result = await pool.query('SELECT * FROM topics ORDER BY last_activity DESC');
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(result.rows));
    } catch (err) {
        console.error(err);
        res.writeHead(500);
        res.end('Server Error');
    }
}

module.exports = { handleGetTopics };

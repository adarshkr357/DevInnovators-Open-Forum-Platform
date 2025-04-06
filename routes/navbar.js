const express = require('express');
const path = require('path');
const router = express.Router();

// Serve navbar.html
router.get('/navbar', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/partials/navbar.html')); // Adjust the path based on your structure
});

module.exports = router;
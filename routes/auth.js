const express = require('express');
const router = express.Router();
const { login } = require('../controllers/authController');

// POST /api/auth/login
router.post('/login', login);

module.exports = router;
// POST /api/auth/logout
router.post('/logout', (req, res) => {
    // Invalidate the token on the client side
    res.status(200).json({ message: 'Logged out successfully' });
});
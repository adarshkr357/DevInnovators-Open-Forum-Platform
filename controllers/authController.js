const db = require('../config/database'); // make sure this path is correct

async function registerUser(req, res) {
    const { name, email, password } = req.body;
    try {
        await db.query(
            'INSERT INTO regis_data.form_data (name, email, password) VALUES ($1, $2, $3)',
            [name, email, password]
        );
        res.status(200).json({ message: 'User registered successfully!' });
    } catch (error) {
        console.error('Database error:', error);
        res.status(500).json({ message: 'Error registering user.' });
    }
}

module.exports = { registerUser };

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../models'); // Adjust the import based on your model structure

exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find user by email
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Check password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Generate JWT token
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({ token, user: { id: user.id, email: user.email } });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

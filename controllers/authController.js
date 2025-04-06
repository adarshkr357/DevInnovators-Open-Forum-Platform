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

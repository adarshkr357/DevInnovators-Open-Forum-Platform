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

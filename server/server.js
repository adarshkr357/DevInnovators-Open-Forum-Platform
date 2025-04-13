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

const express = require('express');
const path = require('path');
const aboutRoutes = require('./routes/index');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', aboutRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
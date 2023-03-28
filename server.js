const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 3002;

const app = express();

app.use('/api/packages', require('./routes/packageRoutes'));


app.listen(port, '127.0.0.1', () => {
    console.log('Listening on port http://localhost:3002')
});
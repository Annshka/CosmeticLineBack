const express = require('express');
const dotenv = require('dotenv').config();
const port = process.env.PORT || 3002;
const {errorHandler} = require('./utils/errors');

const app = express();

//Configure ENV File
require('./config/database');

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/api/packages', require('./routes/packageRoutes'));


app.use(errorHandler);

app.listen(port, '127.0.0.1', () => {
    console.log('Listening on port http://localhost:3002')
});
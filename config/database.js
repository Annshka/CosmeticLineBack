const mongoose = require('mongoose');

require('dotenv').config();

const db = process.env.DB_STRING;

mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection
    .once('open', () => console.log('Connected to MongoDB'))
    .on('error', (error) => {
        console.log('Error occured', error)
});


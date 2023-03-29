const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please enter a username"],
        min: [3, "Enter min 3 characters"],
        unique: [true, "Username already exists"]
    },
    email: {
        type: String,
        required: [true, "Please enter an email"],
        unique: [true, "Email address already exists"]
    },
    password: {
        type: String,
        required: [true, "Please enter a password"],
        min: [6, "enter min 6 characters"]
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    tokens: [
        {
            token: {
                type: String,
                required: true
            },
        }
    ]
},
    {
        timestamps: true
    });

const User = mongoose.model('User', userSchema);
module.exports = User;
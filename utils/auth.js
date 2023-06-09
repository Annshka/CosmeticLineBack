const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

const protect = asyncHandler(async (req, res, next) => {
    let token;

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            //Get token from header
            token = req.headers.authorization.split(' ')[1];

            //Verify token
            const decode = jwt.verify(token, process.env.SECRET_KEY);

            //Get user from the token
            req.user = await User.findById(decode.id).select('-password');

            next();

        } catch(error) {
            console.log(error)
            res.status(401)
            throw new Error('Not authorized. Invalid auth token.')
        }
     }

    if(!token) {
        res.status(401)
        throw new Error('Access denied. Not authorized.')
    }
});

module.exports = {protect}
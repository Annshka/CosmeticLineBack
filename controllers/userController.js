const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

/**
 //  @desc   Register new user
 //  @route  POST /api/users
 //  @access Public
 * */
const registerUser = asyncHandler( async (req, res) => {
    const {username, email, password} = req.body;

    if(!username || !email || !password) {
        res.status(400)
        throw new Error('Please enter all fields')
    }

    //Check if user exists
    const isUser = await User.findOne({email})

    if(isUser) {
        res.status(400)
        throw new Error('User already exists')
    }

    //Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //Create a new user
    const user = await User.create({
        username,
        email,
        password: hashedPassword
    })

    if(user) {
        res.status(201).json({
            _id: user.id,
            username: user.username,
            email: user.email,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }

});


/**
 //  @desc   Authenticate a user
 //  @route  POST /api/users/login
 //  @access Public
 * */
const loginUser = asyncHandler( async (req, res) => {
    const {email, password} = req.body;

    //Check for user email
    const user = await User.findOne({email})

    if(user && (await bcrypt.compare(password, user.password))) {
       res.json({
           _id: user.id,
           username: user.username,
           email: user.email,
           token: generateToken(user._id)
       })
    } else {
        res.status(400)
        throw new Error('Invalid data')
    }
});


/**
 // @desc   Get current logged in user data
 // @route  GET /api/users/me
 // @access Private
 * */
const getUserId = asyncHandler( async (req, res) => {

    res.status(200).json(req.user)
});


/**
 // @desc   Update user data
 // @route  PUT /api/users/:id
 // @access Private
 * */
const updateUser = asyncHandler( async (req, res) => {
    res.json({message: 'Update user data'})
});


//Generate JWT
const generateToken = (id) => {
    return jwt.sign({id}, process.env.SECRET_KEY, {
        expiresIn: '30d'
    })
}

module.exports = {
    registerUser,
    loginUser,
    getUserId,
    updateUser
}

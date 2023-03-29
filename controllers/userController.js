/**
 //  @desc   Register new user
 //  @route  POST /api/users
 //  @access Public
 * */
const registerUser = (req, res) => {
    res.json({message: 'Register User'})
}


/**
 //  @desc   Authenticate a user
 //  @route  POST /api/users/login
 //  @access Public
 * */
const loginUser = (req, res) => {
    res.json({message: 'User logged in'})
}


/**
 // @desc   Get current logged in user data
 // @route  GET /api/users/me
 // @access Private
 * */
const getUserId = (req, res) => {
    res.json({message: 'User data display'})
}


/**
 // @desc   Update user data
 // @route  PUT /api/users/:id
 // @access Public
 * */
const updateUser = (req, res) => {
    res.json({message: 'Update user data'})
}


module.exports = {
    registerUser,
    loginUser,
    getUserId,
    updateUser
}

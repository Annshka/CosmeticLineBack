const asyncHandler = require('express-async-handler');
const Package = require('../models/packageModel');
const User = require('../models/userModel');


/**
 //  @desc   Get all user packages
 //  @route  GET /api/packages
 //  @access Private
 * */
const getPackages = asyncHandler(async (req, res) => {
    const packages = await Package.find({user: req.user.id})

    res.status(200).json(packages)
});

/**
 //  @desc   Get one package
 //  @route  GET /api/packages/:id
 //  @access Private
 * */
const getPackage = asyncHandler(async (req, res) => {
    const package = await Package.findById(req.params.id)

    res.status(200).json(package)
});

/**
 //  @desc   Set package
 //  @route  POST /api/packages
 //  @access Private
 * */
const setPackage = asyncHandler(async (req, res) => {
    if(!req.body.code) {
        res.status(400)
        throw new Error('Enter package code')
    }
    const package = await Package.create({
        code: req.body.code,
        type: req.body.type,
        material: req.body.material,
        diameter: req.body.diameter,
        width: req.body.width,
        surface: req.body.surface,
        image: req.body.image,
        user: req.user.id,
    })

    res.status(200).json(package)
});

/**
 //  @desc   Update package
 //  @route  PUT /api/packages/:id
 //  @access Private
 * */
const updatePackage = asyncHandler(async (req, res) => {
    const package = await Package.findById(req.params.id)

    if(!package) {
        res.status(400)
        throw new Error('Package not found...')
    }

    //Check for user and make sure logged in user matches user item
    if(!req.user) {
        res.status(401)
        throw new Error('User not found')
    }

    if (package.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }

    const updatedPackage = await Package.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    res.status(200).json(updatedPackage)
});

/**
 //  @desc   Delete package
 //  @route  DELETE /api/packages/:id
 //  @access Private
 * */
const deletePackage = asyncHandler(async (req, res) => {
    const package = await Package.findById(req.params.id)

    if(!package) {
        res.status(400)
        throw new Error('Package not found...')
    }

    //Check for user and make sure logged in user matches user item
    if(!req.user) {
        res.status(401)
        throw new Error('User not found')
    }

    if (package.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }


    await package.deleteOne()

    res.status(200).json({id: req.params.id})
});

module.exports = {
    getPackages,
    getPackage,
    setPackage,
    updatePackage,
    deletePackage
}
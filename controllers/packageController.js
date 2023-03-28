
/**
 //  @desc   Get all user packages
 //  @route  GET /api/packages
 //  @access Private
 * */
const getPackages = (req, res) => {
    res.status(200).json({message: 'Get packages'})
};

/**
 //  @desc   Get one package
 //  @route  GET /api/packages/:id
 //  @access Private
 * */
const getPackage = (req, res) => {
    res.status(200).json({message: `Get package ${req.params.id}`})
};

/**
 //  @desc   Set package
 //  @route  POST /api/packages
 //  @access Private
 * */
const setPackage = (req, res) => {
    res.status(200).json({message: 'Set package'})
};

/**
 //  @desc   Update package
 //  @route  PUT /api/packages/:id
 //  @access Private
 * */
const updatePackage = (req, res) => {
    res.status(200).json({message: `Update package ${req.params.id}`})
};

/**
 //  @desc   Delete package
 //  @route  DELETE /api/packages/:id
 //  @access Private
 * */
const deletePackage = (req, res) => {
    res.status(200).json({message: `Delete package ${req.params.id}`})
};

module.exports = {
    getPackages,
    getPackage,
    setPackage,
    updatePackage,
    deletePackage
}
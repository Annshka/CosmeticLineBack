const express = require('express');
const router = express.Router();
const {getPackages, getPackage, setPackage, updatePackage, deletePackage} = require('../controllers/packageController');

router.route('/').get(getPackages).post(setPackage);
router.route('/:id').get(getPackage).put(updatePackage).delete(deletePackage);

module.exports = router;
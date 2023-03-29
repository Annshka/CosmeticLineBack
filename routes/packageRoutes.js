const express = require('express');
const router = express.Router();
const {getPackages, getPackage, setPackage, updatePackage, deletePackage} = require('../controllers/packageController');

const {protect} = require('../utils/auth');

router.route('/').get(protect, getPackages).post(protect, setPackage);
router.route('/:id').get(protect, getPackage).put(protect, updatePackage).delete(protect, deletePackage);

module.exports = router;
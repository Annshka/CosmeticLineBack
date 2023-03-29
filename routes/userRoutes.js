const express = require('express');
const router = express.Router();
const {registerUser, loginUser, getUserId, updateUser} = require('../controllers/userController');

const {protect} = require('../utils/auth');

router.post('/', registerUser);
router.post('/login', loginUser);
router.get('/me', protect, getUserId);
router.put('/:id', updateUser);


module.exports = router;
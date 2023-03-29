const express = require('express');
const router = express.Router();
const {registerUser, loginUser, getUserId, updateUser} = require('../controllers/userController');

router.post('/', registerUser);
router.post('/login', loginUser);
router.get('/me', getUserId);
router.put('/:id', updateUser);


module.exports = router;
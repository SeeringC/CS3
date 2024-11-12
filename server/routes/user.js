const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const auth = require('../middleware/auth');

router.get('/profile', auth, userController.getProfile);
router.put('/update', auth, userController.updateProfile);
router.put('/avatar', auth, userController.updateAvatar);

module.exports = router; 
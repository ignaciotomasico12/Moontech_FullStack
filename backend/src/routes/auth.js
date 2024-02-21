const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/auth/register', authController.register);
router.post('/auth/login', authController.login);
router.use(/^(?!\/auth).*$/, authController.verifyAuth);

module.exports = router;
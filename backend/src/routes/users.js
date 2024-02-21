const express = require('express');
const router = express.Router();
const userController = require('../controllers/usersController');
const authController = require('../controllers/authController');

router.get('/users', authController.verifyAuth, userController.getAll);
router.get('/user/:id', authController.verifyAuth, userController.getById);
router.post('/user', authController.verifyAuth, userController.create);
router.put('/user/:id', authController.verifyAuth, userController.update);
router.delete('/user/:id',authController.verifyAuth, userController.deleteById);

module.exports = router;
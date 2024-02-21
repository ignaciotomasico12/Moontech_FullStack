const express = require('express');
const router = express.Router();
const logsController = require('../controllers/logsController');
const authController = require('../controllers/authController');

router.get('/logs', authController.verifyAuth, logsController.getAll);
router.delete('/log/:id',authController.verifyAuth, logsController.deleteById);

module.exports = router;
const express = require('express');
const router = express.Router();

const UserController = require('../../../controller/users.controller'); // ⭐ DIRECT

router.get('/registerUser', UserController.registerUser);

module.exports = router;

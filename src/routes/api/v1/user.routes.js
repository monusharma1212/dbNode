const express = require('express');
const { UserCcontroller } = require('../../../controller');
const Router = express.Router();

// http://localhost:8080/api/v1/category/getCategory
Router.get('/registerUser',UserCcontroller.registerUser)



module.exports = Router;
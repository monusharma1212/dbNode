const express = require('express');
const Router = express.Router();
const { CategoryController } = require('../../../controller');


// http://localhost:8080/api/v1/category/getCategory

Router.get('/getAllCategory', CategoryController.getAllCtaegory)

Router.get('/getCategory/:id', CategoryController.getCtaegory)


Router.post('/addCategory', CategoryController.addCtaegory)

Router.put('/updateCategory/:id',CategoryController.updateCategory);

Router.delete('/deleteCategory/:id',CategoryController.deleteCategory)

module.exports = Router;


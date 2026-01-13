const express = require('express');
const { CategoryController } = require('../../../controller');

const Router = express.Router();

// http://localhost:8080/api/v1/category/getCategory
Router.get('/getCart',CategoryController.getCtaegory)


// Router.post('/addCart', updateCategory())

Router.put('/updateCart/:id', (req, res) => {
  console.log(req.body, req.params);
  res.status(200).json({message:'Section Update Successfully.'})
})

Router.delete('/deleteCart', (req, res) => {
  console.log(req.query.id);
  res.status(200).json({message:'Delete Section Successfully.'})
})

module.exports = Router;
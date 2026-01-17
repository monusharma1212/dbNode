const express = require('express');
const Router = express.Router();

// http://localhost:8080/api/v1/category/getCategory

Router.get('/getCategory', (req, res) => {
  res.status(200).json({id:101,name:'abc'});
})


Router.post('/addCategory', (req, res) => { 
  console.log(req.body);
  res.status(200).json({message:'category Added'})
})

Router.put('/updateCategory/:id', (req, res) => {
  console.log(req.body, req.params);
  res.status(200).json({message:'category Update Successfully.'})
})

Router.delete('/deleteCategory', (req, res) => {
  console.log(req.query.id);
  res.status(200).json({message:'Delete Category Successfully.'})
})

module.exports = Router;


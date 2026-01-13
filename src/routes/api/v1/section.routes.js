const express = require('express');
const Router = express.Router();

// http://localhost:8080/api/v1/category/getCategory
Router.get('/getSection', (req, res) => {
  res.status(200).json({id:120,name:'Section '});
})


Router.post('/addSection', (req, res) => {
  console.log(req.body);
  res.status(200).json({message:'Section Added'})
})

Router.put('/updateSection/:id', (req, res) => {
  console.log(req.body, req.params);
  res.status(200).json({message:'Section Update Successfully.'})
})

Router.delete('/deleteSection', (req, res) => {
  console.log(req.query.id);
  res.status(200).json({message:'Delete Section Successfully.'})
})

module.exports = Router;
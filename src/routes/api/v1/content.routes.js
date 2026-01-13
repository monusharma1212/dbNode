const express = require('express');
const Router = express.Router();

// http://localhost:8080/api/v1/course/getCourse
Router.get('/getContent', (req, res) => {
  res.status(200).json({id:101,name:'abc'});
})


Router.post('/addContent', (req, res) => {
  console.log(req.body);
  res.status(200).json({message:'category Added'})
})

Router.put('/updateContent/:id', (req, res) => {
  console.log(req.body, req.params);
  res.status(200).json({message:'category Update Successfully.'})
})

Router.delete('/deleteContent', (req, res) => {
  console.log(req.query.id);
  res.status(200).json({message:'Delete Course Successfully.'})
})

module.exports = Router;


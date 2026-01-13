const express = require('express');
const Router = express.Router();

// http://localhost:8080/api/v1/course/getCourse
Router.get('/getCertificate', (req, res) => {
  res.status(200).json({id:150,name:'Munna Kumar'});
})


Router.post('/addCertificate', (req, res) => {
  console.log(req.body);
  res.status(200).json({message:'abc Added'})
})

Router.put('/updateCertificate/:id', (req, res) => {
  console.log(req.body, req.params);
  res.status(200).json({message:'Certificate Update Successfully.'})
})

Router.delete('/deleteCertificate', (req, res) => {
  console.log(req.query.id);
  res.status(200).json({message:'Delete Certificate Successfully.'})
})

module.exports = Router;


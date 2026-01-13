const express = require('express');
const Router = express.Router();

// http://localhost:8080/api/v1/course/getCourse
Router.get('/getEnrollment', (req, res) => {
  res.status(200).json({id:201,name:'Enrollment Added'});
})


Router.post('/addEnrollment', (req, res) => {
  console.log(req.body);
  res.status(200).json({message:'Enrollment Added'})
})

Router.put('/updateEnrollment/:id', (req, res) => {
  console.log(req.body, req.params);
  res.status(200).json({message:'category Enrollment Successfully.'})
})

Router.delete('/deleteEnrollment', (req, res) => {
  console.log(req.query.id);
  res.status(200).json({message:'Delete Enrollment Successfully.'})
})

module.exports = Router;


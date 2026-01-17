// const express = require('express');
// const Router = express.Router();

// // http://localhost:8080/api/v1/course/getCourse
// Router.get('/getCourse', (req, res) => {
//   res.status(200).json({id:101,name:'abc'});
// })


// Router.post('/addCourse', (req, res) => {
//   console.log(req.body);
//   res.status(200).json({message:'category Added'})
// })

// Router.put('/updateCourse/:id', (req, res) => {
//   console.log(req.body, req.params);
//   res.status(200).json({message:'category Update Successfully.'})
// })

// Router.delete('/deleteCourse', (req, res) => {
//   console.log(req.query.id);
//   res.status(200).json({message:'Delete Course Successfully.'})
// })

// module.exports = Router;

const express = require('express');
const Router = express.Router();
const { CourseController } = require('../../../controller');


// http://localhost:8080/api/v1/category/getCategory

Router.get('/getAllCourse', CategoryController.getAllCtaegory)

Router.get('/getCourse/:id', CategoryController.getCtaegory)


Router.post('/addCourse', CategoryController.addCtaegory)

Router.put('/updateCourse/:id',CategoryController.updateCategory);

Router.delete('/deleteCourse/:id',CategoryController.deleteCategory)

module.exports = Router;


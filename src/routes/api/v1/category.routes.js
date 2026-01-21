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

5. List users and their total likes
Total Users 	
[
  {
    $count: 'TotalUsers'
  }
]

[
  {
    $unwind: "$posts"
  },
  {
    $group: {
      _id: null,
      totalLikes: {
        $sum:"$posts.likes"
      }
    }
  }
]


6. Find the user name with the maximum likes of posts.

[
  {
    $unwind: "$posts"
  },
  {
    $group: {
      _id: "$posts.likes",
      totalLikes: {
        $sum:"$posts.likes"
      }
    }
  }
]


7. Count the number of active and inactive users.

[
  {
    $group: {
      _id: "$isActive",
      totalUsers: { $sum: 1 }
    }
  }
]
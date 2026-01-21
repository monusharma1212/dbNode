const express = require('express');
const router = express.Router();

const categoryRouter = require("./category.routes");
const courseRouter = require("./course.routes");
const sectionRouter = require("./section.routes");
const contentRouter = require("./content.routes");
const certificateRouter = require("./certificate.routes");
const enrollmentRouter = require("./enrollment.routes");
const progressRouter = require("./progress.routes");
const cartRouter = require("./cart.routes");
const paymentRouter = require("./payment.routes");
const userRouter = require("./user.routes");
const reviewRouter = require("./review.routes");
const quizRouter = require("./quiz.routes");
const quizContentRouter = require("./quizContent.routes");


// // // // // // // // // // // // // // // // // // // // // // // 

router.use("/category",categoryRouter);
router.use("/course",courseRouter);
router.use("/section",sectionRouter);
router.use("/content",contentRouter);
router.use("/certificate",certificateRouter);
router.use("/enrollment",enrollmentRouter);
router.use("/progress",progressRouter);
router.use("/cart",cartRouter);
router.use("/payment",paymentRouter);
router.use("/user",userRouter);
router.use("/review",reviewRouter);
router.use("/quiz",quizRouter);
router.use("/quizContent",quizContentRouter);

module.exports = router;

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="index.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css">
    <style>
        .borderColor{
            outline: none;
            border: 1px solid red;
        }
        .td{
            text-decoration: line-through;
        }
        .btnE{
            /* background-color: red; */
            color: white;
            font-size: 20px;
        }
        .btnD{
            /* background-color: rgb(90, 210, 53); */
            /* color: white; */
            background: none;
            border: none;
            /* font-size: 20px; */
            padding: 0;
            margin: 0 10px;
        }

        i {
            display: block;
            
        }

        
    </style>
</head>
<body>
    <h1>Hello World</h1>

    <form action="" onsubmit="return submitFunction()">
        <input type="text" name="" id="inputName">
        <button type="submit">Submitted</button>
    </form>

    <ul id="countryName">
    </ul>
 

    <script src="index.js"></script>
</body>
</html>




script 



let update = null;

const submitFunction = () => {
  let storeValue = document.getElementById("inputName").value;

  if(storeValue === ""){
    
    document.getElementById("inputName").focus()
    
    document.getElementById("inputName").classList.add("borderColor")
    
    alert("Please Enter the Input")
    
    return false;
  }
  
  document.getElementById("inputName").classList.remove("borderColor")
  
  if(update != null){

    update.firstChild.textContent = storeValue; 


    update = null

    document.getElementById("inputName").value = ''

    return false;
  }
  

  let createElement = document.createElement("li");

  let textNode = document.createTextNode(storeValue);

  createElement.append(textNode);

  let cityName = document.getElementById("countryName");


  cityName.appendChild(createElement);

  const btnD = document.createElement("button");
  // btnD.textContent = "Delete";

  let idelete = document.createElement("i")

  idelete.setAttribute("class","fa-solid fa-trash")

  btnD.appendChild(idelete)
  
  createElement.appendChild(btnD);

  btnD.addEventListener("click", function () {
    event.target.parentNode.parentNode.remove();
  });

  const btnE = document.createElement("button");

  btnE.textContent = "Edit";
 
  btnE.setAttribute("class","btnE")
  btnD.setAttribute("class","btnD")
  

  createElement.appendChild(btnE);
  
  btnE.addEventListener("click", function () {
    document.getElementById("inputName").value =
      event.target.parentNode.firstChild.textContent;
      
      
      update = event.target.parentNode
      // document.getElementById("inputName").value = event.target.parentNode.childNodes[0].textContent
    });
    
    let lineThrough = document.createElement("button") 
    
    lineThrough.textContent = "submit"
    
    createElement.appendChild(lineThrough);

    lineThrough.addEventListener("click",function(){
      
      event.target.parentNode.classList.toggle("td")
      
    })


  return false;
};


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
      _id: "$_id",
      totalLikes: {
        $sum: "$posts.likes"
      },
      name:{$first:"$name"}
    }
     
  },
  {
  	$sort: {
      totalLikes: -1
    }
  },
  {
    $limit: 1
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

8. List the cities with the highest average age.
[
  {
    $group: {
      _id: "$city",
      age: {
        $sum: "$age"
      }
    }
  },
  {
    $sort: {
      age: -1
    }
  },
  {
    $limit: 1
  }
]

9. Count the number of users in each city.
[
  {
    $group: {
      _id: "$city",
      user: {
        $sum: "$_id"
      }
    }
  }
]


10. Count the number of users with JavaScript skills.

[
  {
    $match: {
  			skills: "JavaScript"
    }
  },
  {
    $count: 'totalJsPerson'
  }
]

11. Count the number of users with each skill.

[
  {
    $unwind: "$skills"
  },
  {
    $group: {
      _id: "$skills",
      skills: {
        $sum: 1
      }
    }
  }
]

12. Find users who have posts with more than 15 likes and a specific skill.

[
  {
    $unwind: "$posts"
  },
  {
    $group: {
      _id: "$_id",
      totalLikes: {
        $sum: "$posts.likes"
      },
        skills: {$first:"$skills"}
    }
  },
  {
    $match: {
      $and:[
        {totalLikes:{$gte:40}},
        {skills:"React"},
      ]
    }
  }

]


13. Find users with the highest total number of likes across all posts.

[
  {
    $unwind: "$posts"
  },
  {
    $group: {
      _id: "$_id",
      totalLikes: {
        $sum: "$posts.likes"
      }
    }
  },
  {
    $sort: {
      totalLikes: -1
    }
  }
]


14. Find users who have friends and count the number of friends.

[
  {
    $match: {
      friends:{$exists:true}
    }
  },
  {
    $addFields: {
      totalFriends: {$size: "$friends"}
    }
  }
]


15. Find users who have at least one post with a specific comment and a specific skill.
[
  {
    $unwind: "$posts"
  },
  {
    $match: {
      $or:[
        {"posts.comments":"Great post!"},
        {skills:"JavaScript"}
      ]
    }
  },
  {
    $group: {
      _id: "$_id",
      
      "skills" : {$first:"$skills"},
      "posts" : {$push:"$posts"},
      
    }
  }
]



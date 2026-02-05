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

console.log(sectionRouter);



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


console.log("category:", typeof categoryRouter);
console.log("course:", typeof courseRouter);
console.log("section:", typeof sectionRouter);
console.log("content:", typeof contentRouter);
console.log("certificate:", typeof certificateRouter);
console.log("enrollment:", typeof enrollmentRouter);
console.log("progress:", typeof progressRouter);
console.log("cart:", typeof cartRouter);
console.log("payment:", typeof paymentRouter);
console.log("user:", typeof userRouter);
console.log("review:", typeof reviewRouter);
console.log("quiz:", typeof quizRouter);
console.log("quizContent:", typeof quizContentRouter);


module.exports = router;
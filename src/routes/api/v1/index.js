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

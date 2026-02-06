const express = require("express");
const router = express.Router();

const UserController = require("../../../controller/users.controller");
const passport = require("passport");
const User = require("../../../model/users.model");

router.get("/registerUser", UserController.registerUser);

router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile"] }),
);



router.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect("/");
  },
);

module.exports = router;

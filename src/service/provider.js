const passport = require("passport");
const User = require("../model/users.model");

var GoogleStrategy = require("passport-google-oauth20").Strategy;

const providers = () => {
  try {
    passport.use(
      new GoogleStrategy( 
        {
          clientID: process.env.GOOGLE_CLIENT_ID,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET,
          callbackURL: "http://localhost:8080/api/v1/user/auth/google",
        },
        async function (accessToken, refreshToken, profile, cb) {
          const userData = await User.findOne({ googleId: profile.id });

          console.log(userData);


          if (!userData) {
            console.log("profile", profile, profile.displayName, profile.emails[0].value,);
            const data = await User.create({
              name: profile.displayName,
              email: profile.emails[0].value,
              googleId: profile.id
            });

            console.log(data);

            return cb(null, data)
          }
          return cb(null, userData)
        }
      ));
    passport.serializeUser(function (user, done) {
      console.log("ssss", user);

      done(null, user._id);
    });

    passport.deserializeUser(async function (_id, done) {
      console.log("dddd", _id);

      const user = await User.findById(_id);

      if (user) {
        done(err, user);
      } else {
        done('User Data Not Found', user);
      }
    });
  } catch (error) {
    console.log(error)
  }
};

module.exports = providers;

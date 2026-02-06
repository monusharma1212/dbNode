const passport = require("passport");

var GoogleStrategy = require("passport-google-oauth20").Strategy;

const providers = () => {
  try {
    passport.use(
      new GoogleStrategy(
        {
          clientID: process.env.GOOGLE_CLIENT_ID,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET,
          callbackURL: "http://localhost:8080/api/v1/user/auth/google/callback",
        },
        function (accessToken, refreshToken, profile, cb) {
          User.findOrCreate({ googleId: profile.id }, function (err, user) {
            return cb(err, user);
          });
          const data = Users.create({
              'name':profile.displayName,
              'email':profile.emails,
          
          });
        },
      ),
    );
  } catch (error) {}
};

module.exports = providers;

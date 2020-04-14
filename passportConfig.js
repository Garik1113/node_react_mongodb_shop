const Localstrategy = require("passport-local").Strategy;
const User = require("./models/user");
const bcrypt = require("bcrypt");

function initializePassport(passport) {
  const authenticateUser = async (email, password, done) => {
    const errors = { password: { msg: "" }, email: { msg: "" } };
    User.findOne({ email: email }, async (err, user) => {
      if (err) {
        return done(err);
      }
      if (!user) {
        delete errors.password;
        errors.email.msg = "Incorrect email.";
        return done(null, false, errors);
      }
      bcrypt.compare(password, user.password, (err, res) => {
        if (res) {
          return done(null, user);
        } else {
          delete errors.email;
          errors.password.msg = "Incorrect password";
          return done(null, false, errors);
        }
      });
    });
  };
  passport.use(
    new Localstrategy(
      { usernameField: "email", passwordField: "password" },
      authenticateUser
    )
  );

  passport.serializeUser((user, done) => {
    done(null, user);
  });
  passport.deserializeUser((id, done) => {
    done(null, id);
  });
}

module.exports = initializePassport;

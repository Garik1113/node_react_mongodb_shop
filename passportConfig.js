const passport = require('passport');
const User = require('./models/user');
const bcrypt = require('bcrypt');

const Localstrategy = require('passport-local').Strategy;

passport.use(
  new Localstrategy(
    { usernameField: 'email', passwordField: 'password' },
    (email, password, done) => {
      User.findOne({ email: email }, (err, user) => {
        if (err) throw err;
        if (!user) {
          return done(null, false, {
            message: 'Cant find User for that email',
          });
        }
        if (!bcrypt.compare(password, user.password)) {
          return done(null, false, { message: 'Incorrect password' });
        }
        console.log('ok');
        return done(null, user);
      });
    }
  )
);

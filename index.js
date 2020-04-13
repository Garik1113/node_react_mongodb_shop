const express = require('express');
const app = express();
const HomeRouter = require('./routes/homeRoutes');
const UserRouter = require('./routes/userRoutes');
const ProductRouter = require('./routes/productRoutes');
const mongoose = require('mongoose');
const session = require('express-session');
const multer = require('multer');
const passport = require('passport');

//express session config
app.set('trust proxy', 1);
app.use(
  session({
    secret: 'SECRET',
    resave: false,
    saveUninitialized: true,
  })
);
app.use(passport.session());

//config data for port and db
require('dotenv').config();
const PORT = process.env.PORT || 5000;

//get request body data
app.use(express.json());

//Multer config for upload files
const storageConfig = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'client/public/images');
  },
  filename: (req, file, cb) => {
    const name = new Date().getTime() + file.originalname.replace(/\s/g, '');
    cb(null, name);
  },
});
app.use(multer({ storage: storageConfig }).array('images'));

//passport config
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

app.use(passport.initialize());

//Routes
app.use('/', HomeRouter);
app.use('/users', UserRouter);
app.use('/products', ProductRouter);
//db config and start app
const URL = process.env.DB_URL;
const start = async () => {
  await mongoose.connect(
    URL,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (error) => {
      if (error) {
        throw error;
      }
    }
  );
  app.listen(PORT, () => {
    console.log('Server has been running');
  });
};

start();

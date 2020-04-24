require("dotenv").config();
const express = require("express");
const app = express();
const HomeRouter = require("./routes/homeRoutes");
const UserRouter = require("./routes/userRoutes");
const ProductRouter = require("./routes/productRoutes");
const CategoryRouter = require("./routes/categoryRoutes");
const CartRouter = require("./routes/cartRoutes");
const mongoose = require("mongoose");
const session = require("express-session");
const multer = require("multer");

//express session config
app.set("trust proxy", 1);
app.use(
  session({
    secret: "SECRET",
    resave: false,
    saveUninitialized: false,
  })
);

const passport = require("passport");
const flash = require("express-flash");
const initializePassport = require("./passportConfig");
initializePassport(passport);
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

//config data for port and db

const PORT = process.env.PORT || 5000;

//get request body data
app.use(express.json());

//Multer config for upload files
const storageConfig = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "client/public/images");
  },
  filename: (req, file, cb) => {
    const name = new Date().getTime() + file.originalname.replace(/\s/g, "");
    cb(null, name);
  },
});
app.use(multer({ storage: storageConfig }).array("images"));

//Routes
app.use("/home", HomeRouter);
app.use("/users", UserRouter);
app.use("/products", ProductRouter);
app.use("/categories", CategoryRouter);
app.use("/cart", CartRouter);
//db config and start app
const URL = process.env.DB_URI;
const start = async () => {
  await mongoose.connect(
    URL,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    },
    (error) => {
      if (error) {
        throw error;
      }
    }
  );
  app.listen(PORT, () => {
    console.log("Server has been running");
  });
};

start();

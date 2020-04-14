const { check, validationResult } = require("express-validator");

const signupValidate = () => {
  return [
    check("name").notEmpty().withMessage("Name is required"),
    check("surname").notEmpty().withMessage("Surname is required"),
    check("age").notEmpty().withMessage("Age is required"),
    check("email").notEmpty().withMessage("Email is required"),
    check("password").notEmpty().withMessage("Password is required"),
    check("confirmPassword")
      .notEmpty()
      .withMessage("Confirm Password is required")
      .custom((val, { req }) => {
        return val === req.body.password;
      })
      .withMessage("Passwords are not the same"),
  ];
};

const loginValidate = () => {
  return [
    check("email").notEmpty().withMessage("Email is Required"),
    check("password").notEmpty().withMessage("Password is Required"),
  ];
};

module.exports = { loginValidate, signupValidate };

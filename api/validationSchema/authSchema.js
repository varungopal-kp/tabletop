const { body } = require("express-validator");

module.exports.loginSchema = [
  body("email")
    .notEmpty()
    .bail()
    .withMessage("Email is required")
    .isEmail()
    .bail()
    .withMessage("Invalid email address"),

  body("password").notEmpty().bail().withMessage("Password is required"),
];

module.exports.registerSchema = [
  body("email")
    .notEmpty()
    .bail()
    .withMessage("Email is required")
    .isEmail()
    .bail()
    .withMessage("Invalid email address"),

  body("password")
    .notEmpty()
    .bail()
    .withMessage("Password is required")
    .isLength({ min: 1 })
    .bail()
    .withMessage("Password must be at least 7 characters long"),
];

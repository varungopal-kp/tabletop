const { body } = require("express-validator");

module.exports.playerSchema = [
  body("firstName")
    .notEmpty()
    .bail()
    .withMessage("Name is required")
    .isLength({ min: 3, max: 10 })
    .bail()
    .withMessage("Name must be between 3 and 10 characters"),

  body("contact")
    .notEmpty()
    .bail()
    .withMessage("Contact is required")
    .isLength({ min: 10 })
    .bail()
    .withMessage("Contact must be at least 10 characters long"),
];

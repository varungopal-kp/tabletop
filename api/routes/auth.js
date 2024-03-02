const express = require("express");
const router = express.Router();

const AuthController = require("../controllers/AuthController");

const { validateInput } = require("../helpers/validationHandler");
const {
  loginSchema,
  registerSchema,
} = require("../validationSchema/authSchema");

router.post("/login", loginSchema, validateInput, AuthController.login);

router.post(
  "/register",
  registerSchema,
  validateInput,
  AuthController.register
);

module.exports = router;

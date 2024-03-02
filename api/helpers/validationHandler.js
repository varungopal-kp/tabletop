const { validationResult } = require("express-validator");

module.exports.validateInput = (req, res, next) => {
  try {
    const errors = validationResult(req);
    const mergedErr = {};

    if (!errors.isEmpty()) {
      const errorMsg = errors
        .array()
        .map((_a) => ({ [_a.path]: _a?.msg }))
        .filter((_a) => _a);

      for (const obj of errorMsg) {
        for (const key in obj) {
          if (obj.hasOwnProperty(key)) {
            mergedErr[key] = obj[key];
          }
        }
      }

      const errorObj = {
        status: 400,
        message: "Validation Error",
        errors: [mergedErr],
      };
      return res.status(400).json(errorObj);
    }
    next();
  } catch (error) {
    console.error(error);
  }
};

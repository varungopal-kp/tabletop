const jwt = require("jsonwebtoken");
const secretKey = process.env.AUTH_KEY;

// Middleware to verify JWT token
exports.isAuthorized = (req, res, next) => {
  try {
    const token = req.cookies["token"];
    if (!token) {
      return res.status(401).json({ status: 401, message: "Not authorized" });
    }

    jwt.verify(token, secretKey, (err, decoded) => {
      if (err) {
        return res.status(401).json({ status: 401, message: "Not authorized" });
      }
      req.userId = decoded.userId; // Attach user ID to the request for further processing
      next();
    });
  } catch (error) {
    console.error(error);
    return res.status(401).json({ status: 401, message: "Not authorized" });
  }
};

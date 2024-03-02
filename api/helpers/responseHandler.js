module.exports.sendResponse = (res, statusCode, data, message = "") => {
  return res.status(statusCode).json({
    status: statusCode,
    message:
      message ||
      (statusCode === 200
        ? "Success"
        : statusCode === 500
        ? "Internal Server Error"
        : "Error"),
    result: data,
  });
};

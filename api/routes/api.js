var express = require("express");
var router = express.Router();
var playersRouter = require("./players");

router.use("/players", playersRouter);

module.exports = router;

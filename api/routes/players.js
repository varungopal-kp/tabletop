var express = require("express");
var router = express.Router();

const PlayerController = require("../controllers/PlayerController");
const { validateInput } = require("../helpers/validationHandler");
const { playerSchema } = require("../validationSchema/playerSchema");

router.get("/", PlayerController.getPlayers);
router.get("/:id", PlayerController.getPlayerDetails);
router.post("/", playerSchema, validateInput, PlayerController.createPlayers);

router.put("/:id", playerSchema, validateInput, PlayerController.updatePlayers);

router.delete("/:id", PlayerController.deletePlayers);

module.exports = router;

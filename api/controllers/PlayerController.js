const Player = require("../models/Player");
const { sendResponse } = require("../helpers/responseHandler");

module.exports.getPlayers = async (req, res) => {
  try {
    const { search } = req.query;
    const filter = {};
    if (search) {
      filter.gameSession = { $regex: search, $options: "i" };
    }
    const players = await Player.find(filter);
    return sendResponse(res, 200, players);
  } catch (err) {
    console.error(err);
    return sendResponse(res, 500);
  }
};

module.exports.getPlayerDetails = async (req, res) => {
  try {
    const id = req.params.id;
    const player = await Player.findById(id);
    if (player) {
      return sendResponse(res, 200, player);
    } else {
      return sendResponse(res, 400, null, "Record not found");
    }
  } catch (err) {
    console.error(err);
    return sendResponse(res, 500);
  }
};

module.exports.createPlayers = async (req, res) => {
  try {
    const formData = req.body;
    const playerExit = await Player.findOne({ contact: formData.contact });
    if (!playerExit) {
      const player = await Player.create(formData);
      return sendResponse(res, 200, player);
    } else {
      return sendResponse(res, 400, null, "Record already exist");
    }
  } catch (err) {
    console.error(err);
    return sendResponse(res, 500);
  }
};

module.exports.updatePlayers = async (req, res) => {
  try {
    const id = req.params.id;
    const formData = req.body;
    const playerExit = await Player.findOne({
      contact: formData.contact,
      _id: { $ne: id },
    });

    if (!playerExit) {
      const player = await Player.findByIdAndUpdate(id, formData);
      return sendResponse(res, 200, player);
    } else {
      return sendResponse(res, 400, null, "Record already exist");
    }
  } catch (err) {
    console.error(err);
    return sendResponse(res, 500);
  }
};

module.exports.deletePlayers = async (req, res) => {
  try {
    const id = req.params.id;

    const player = await Player.findByIdAndDelete(id);

    if (player) {
      return sendResponse(res, 200);
    } else {
      return sendResponse(res, 400);
    }
  } catch (err) {
    console.error(err);
    return sendResponse(res, 500);
  }
};

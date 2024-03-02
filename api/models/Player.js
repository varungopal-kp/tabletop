const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String },
    contact: { type: String, required: true },
    gameSession: { type: String },
  },
  {
    timestamps: true,
  }
);

playerSchema.pre("findOneAndUpdate", function (next) {
  this.options.new = true;
  next();
});

const PlayerSchema = mongoose.model("Player", playerSchema);

module.exports = PlayerSchema;

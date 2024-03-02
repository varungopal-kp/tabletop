const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("findOneAndUpdate", function (next) {
  this.options.new = true;
  next();
});

const UserSchema = mongoose.model("User", userSchema);

module.exports = UserSchema;

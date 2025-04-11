const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  aadhaar: { type: String, required: true, unique: true },
  otp: String,
  otpExpiresAt: Date
});

module.exports = mongoose.model("User", userSchema);
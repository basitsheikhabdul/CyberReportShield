const mongoose = require("mongoose");

const firSchema = new mongoose.Schema({
  aadhaar: { type: String, required: true },
  details: { type: String, required: true },
  evidenceURL: String,
  submittedAt: { type: Date, default: Date.now },
  reference: { type: String, unique: true }
});

module.exports = mongoose.model("FIR", firSchema);
const FIR = require("../models/FIR");

exports.submitFIR = async (req, res) => {
  const { aadhaar, details, evidenceURL } = req.body;
  const reference = "FIR" + Date.now().toString().slice(-6);

  const fir = new FIR({ aadhaar, details, evidenceURL, reference });
  await fir.save();
  res.json({ message: "FIR submitted", reference });
};

exports.trackFIR = async (req, res) => {
  const { reference } = req.params;
  const fir = await FIR.findOne({ reference });

  if (!fir) return res.status(404).json({ message: "FIR not found" });

  res.json(fir);
};
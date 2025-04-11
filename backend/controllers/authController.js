const User = require("../models/User");

exports.generateOTP = async (req, res) => {
  const { aadhaar } = req.body;
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  const expiry = new Date(Date.now() + 5 * 60 * 1000);

  await User.findOneAndUpdate(
    { aadhaar },
    { otp, otpExpiresAt: expiry },
    { upsert: true, new: true }
  );

  res.json({ message: "OTP sent", otp }); // In production, send via SMS
};

exports.verifyOTP = async (req, res) => {
  const { aadhaar, otp } = req.body;
  const user = await User.findOne({ aadhaar });

  if (!user || user.otp !== otp || user.otpExpiresAt < new Date()) {
    return res.status(400).json({ message: "Invalid or expired OTP" });
  }

  res.json({ message: "OTP verified" });
};
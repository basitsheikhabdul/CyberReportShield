const express = require("express");
const router = express.Router();
const { submitFIR, trackFIR } = require("../controllers/firController");
const FIR = require("../models/FIR");

// Route to submit a new FIR
router.post("/submit", submitFIR);

// Route to track an FIR by reference ID
router.get("/track/:reference", trackFIR);

// Route to get all FIRs (for admin or display purposes)
router.get("/all", async (req, res) => {
  try {
    const firs = await FIR.find().sort({ submittedAt: -1 });
    res.json(firs);
  } catch (err) {
    res.status(500).json({ message: "Failed to retrieve FIRs" });
  }
});

module.exports = router;
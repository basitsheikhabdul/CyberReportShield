const express = require("express");
const router = express.Router();
const { submitFIR, trackFIR } = require("../controllers/firController");

router.post("/submit", submitFIR);
router.get("/track/:reference", trackFIR);

module.exports = router;
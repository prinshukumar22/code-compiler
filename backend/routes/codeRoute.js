const express = require("express");
const router = express.Router();

const { createCoder, getAllCoders } = require("../controllers/codeController");

router.post("/createcoder", createCoder);
router.get("/getcoders", getAllCoders);

module.exports = router;

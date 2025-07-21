const express = require("express");
const router = express.Router();
const getResponse = require("../controllers/get.response");

router.post("/get-response", getResponse);

module.exports = router;

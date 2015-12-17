var express = require("express");
var router = express.Router();

var patient = require("./patient");

router.use("/patient", patient);

module.exports = router;
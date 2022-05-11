const express = require("express");
const controller = require("../controllers/details.controller.js");

const router = express.Router();
// Retrieve all cyclones
router.get("/", controller.findAll);
// Retrieve data of a single Cyclone with id
router.get("/:season/:cyclone", controller.findDetail);

module.exports = router;

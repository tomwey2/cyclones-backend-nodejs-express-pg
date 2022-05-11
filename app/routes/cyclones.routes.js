const express = require("express");
const controller = require("../controllers/cyclones.controller.js");

const router = express.Router();
// Retrieve all cyclones
router.get("/", controller.findAll);
// Retrieve all active Cyclones
router.get("/active", controller.findAllActive);
// Retrieve a single Cyclone with id
router.get("/:season", controller.findInSeason);
router.get("/:season/:cyclone", controller.findCyclone);

module.exports = router;

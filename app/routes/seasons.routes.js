const express = require("express");
const controller = require("../controllers/seasons.controller.js");

const router = express.Router();
// Retrieve all seasons
router.get("/", controller.findAll);
// Retrieve a single seasons with id
router.get("/:id", controller.findOne);

module.exports = router;

module.exports = app => {
  const controller = require("../controllers/details.controller.js");
  var router = require("express").Router();
  // Retrieve all cyclones
  router.get("/", controller.findAll);
  // Retrieve data of a single Cyclone with id
  router.get("/:season/:cyclone", controller.findDetail);
  app.use("/api/details", router);
};

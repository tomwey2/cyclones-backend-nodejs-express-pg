module.exports = app => {
  const controller = require("../controllers/seasons.controller.js");
  var router = require("express").Router();
  // Retrieve all seasons
  router.get("/", controller.findAll);
  // Retrieve a single seasons with id
  router.get("/:id", controller.findOne);
  app.use("/api/seasons", router);
};

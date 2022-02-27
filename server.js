// import express is for building the Rest apis
const express = require("express");
// impofrt body-parser helps to parse the request and create the req.body object
const bodyParser = require("body-parser");
// cors provides Express middleware to enable CORS with various options.
const cors = require("cors");

// create an Express app, then add body-parser and cors middlewares using app.use() method.
// notice that we set origin: http://localhost:8081.
// – define a GET route which is simple for test.
// – listen on port 8080 for incoming requests.
// run the app with command: node server.js.
const app = express();
var corsOptions = {origin: "http://localhost:8081"};
app.use(cors(corsOptions));
// pars requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

// create database if not exists
//const db = require("./app/models");
//db.sequelize.sync();

// simple route
app.get("/", (req, res) => {
  res.json({message: "Welcome to cyclones application."});
});
require("./app/routes/cyclones.routes")(app);
require("./app/routes/seasons.routes")(app);
require("./app/routes/details.routes")(app);
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

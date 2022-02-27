const db = require("../models");
const Cyclones = db.cyclones;
const Op = db.Sequelize.Op;

// retrieve all cyclones from the database
exports.findAll = (req, res) => {
  const title = req.query.title;
  console.log(title);
  var condition = title ? {title: {[Op.iLike]: `%${title}%`}} : null;
  Cyclones.findAll({where: condition})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving cyclones."
      });
    });
};

// retrieve a single cyclone from the database with an id
exports.findInSeason = (req, res) => {
  const season = req.params.season;
  Cyclones.findAll({where: {season_id: season}})
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Cyclone with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Cyclone with id=" + id
      });
    });
};

// retrieve a single cyclone from the database with an id
exports.findCyclone = (req, res) => {
  const season_id = req.params.season;
  const cyclone_id = season_id + "/" + req.params.cyclone;
  const error_message = `Cannot find Cyclone with cyclone_id=${cyclone_id}.`;

  Cyclones.findAll({where: {id: cyclone_id}})
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: error_message
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: error_message
      });
    });
};

// find all cyclones that are active
exports.findAllActive = (req, res) => {
  Cyclones.findAll({where: {active: true}})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving cyclones."
      });
    });
};

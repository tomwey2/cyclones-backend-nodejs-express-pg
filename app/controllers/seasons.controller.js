const db = require("../models");
const Seasons = db.seasons;
const Op = db.Sequelize.Op;

// retrieve all seasons from the database
exports.findAll = (req, res) => {
  Seasons.findAll({order: [["from_year", "DESC"]]})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving seasons."
      });
    });
};

// retrieve a single season from the database with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  Seasons.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find season with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving season with id=" + id
      });
    });
};

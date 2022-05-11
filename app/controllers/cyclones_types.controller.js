const db = require("../models");
const Types = db.cyclones_types;
const Op = db.Sequelize.Op;

// retrieve all seasons from the database
const findAll = (req, res) => {
  Types.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving cyclones_types."
      });
    });
};

// retrieve a single season from the database with an id
const findOne = (req, res) => {
  const id = req.params.id;
  Types.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find cyclones_types with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving cyclones_types with id=" + id
      });
    });
};

module.exports = {
  findAll,
  findOne
};

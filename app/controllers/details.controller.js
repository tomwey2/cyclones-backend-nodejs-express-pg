const db = require("../models");
const Details = db.details;
const Op = db.Sequelize.Op;

// retrieve all cyclones from the database
exports.findAll = (req, res) => {
  const title = req.query.title;
  console.log(title);
  var condition = title ? {title: {[Op.iLike]: `%${title}%`}} : null;
  Details.findAll({where: condition})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving cyclone details."
      });
    });
};

// retrieve a single cyclone from the database with an id
exports.findDetail = (req, res) => {
  const season_id = req.params.season;
  const cyclone_id = season_id + "/" + req.params.cyclone;
  const error_message = `Cannot find cyclone detail data with cyclone_id=${cyclone_id}.`;

  Details.findAll({where: {cyclone_id: cyclone_id}})
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

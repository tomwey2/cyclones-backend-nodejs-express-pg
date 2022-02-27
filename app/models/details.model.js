// This Sequelize Model represents cyclones table in PostgreSQL database.
module.exports = (sequelize, Sequelize) => {
  const Details = sequelize.define(
    "cyclones_detail",
    {
      cyclone_id: {
        type: Sequelize.STRING
      },
      data_date: {
        type: Sequelize.DATE
      },
      coord: {
        type: Sequelize.Sequelize.GEOMETRY("POINT")
      },
      ci: {
        type: Sequelize.NUMBER
      },
      pressure: {
        type: Sequelize.NUMBER
      },
      wind_max: {
        type: Sequelize.STRING
      },
      gusts: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      }
    },
    {timestamps: false}
  );
  return Details;
};

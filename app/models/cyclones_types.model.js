// This Sequelize Model represents the periods table in PostgreSQL database.
module.exports = (sequelize, Sequelize) => {
  const Types = sequelize.define(
    "cyclones_types",
    {
      code: {
        type: Sequelize.STRING
      },
      text_fr: {
        type: Sequelize.STRING
      },
      text_en: {
        type: Sequelize.STRING
      },
      wind_average_min: {
        type: Sequelize.INTEGER
      },
      wind_average_max: {
        type: Sequelize.INTEGER
      }
    },
    {timestamps: false}
  );
  return Types;
};

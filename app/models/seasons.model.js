// This Sequelize Model represents the periods table in PostgreSQL database.
module.exports = (sequelize, Sequelize) => {
  const Seasons = sequelize.define(
    "seasons",
    {
      from_year: {
        type: Sequelize.INTEGER
      },
      until_year: {
        type: Sequelize.INTEGER
      }
    },
    {timestamps: false}
  );
  return Seasons;
};

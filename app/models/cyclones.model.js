// This Sequelize Model represents cyclones table in PostgreSQL database.
module.exports = (sequelize, Sequelize) => {
  const Cyclones = sequelize.define(
    "cyclones",
    {
      season_id: {
        type: Sequelize.INTEGER
      },
      index: {
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      start_date: {
        type: Sequelize.DATEONLY
      },
      end_date: {
        type: Sequelize.DATEONLY
      },
      intense: {
        type: Sequelize.STRING
      },
      active: {
        type: Sequelize.BOOLEAN
      }
    },
    {timestamps: false}
  );
  return Cyclones;
};

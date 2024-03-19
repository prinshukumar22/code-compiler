const Sequelize = require("sequelize");

const sequelize = require("../utils/db");

const Coders = sequelize.define("coders", {
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    primaryKey: true,
  },
  language: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: "Javascript",
  },
  input: {
    type: Sequelize.STRING,
  },
  snippet: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Coders;

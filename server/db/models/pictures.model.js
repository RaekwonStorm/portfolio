'use strict';

const db = require('../db');
const DataTypes = db.Sequelize;

module.exports = db.define('picture', {
  description: {
    type: DataTypes.STRING
  },
  chinese: {
    type: DataTypes.STRING
  },
  location: {
    type: DataTypes.STRING
  },
  imgUrl: {
    type: DataTypes.STRING
  }
});

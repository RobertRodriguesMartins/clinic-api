const { DataTypes } = require('sequelize');
/**
 * @type {import('sequelize').ModelAttributes} attributes
 */
const surgeryAttributes = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  specialty: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  doctor: {
    type: DataTypes.STRING,
    allowNull: false,
  },
};

module.exports = surgeryAttributes;

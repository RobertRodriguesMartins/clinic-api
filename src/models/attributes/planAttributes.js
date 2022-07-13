const { DataTypes } = require('sequelize');
/**
 * @type {import('sequelize').ModelAttributes} attributes
 */
const planAttributes = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    field: 'id',
  },
  coverage: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'coverage',
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
    field: 'price',
  },
};

module.exports = planAttributes;

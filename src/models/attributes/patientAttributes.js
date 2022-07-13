const { DataTypes } = require('sequelize');
/**
 * @type {import('sequelize').ModelAttributes} attributes
 */
const patientAttributes = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  fullName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'full_name',
  },
  planId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'plan_id',
    references: {
      key: 'id',
      model: 'plan',
    },
  },
};

module.exports = patientAttributes;

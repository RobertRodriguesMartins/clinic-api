const { DataTypes } = require('sequelize');
/**
 * @type {import('sequelize').ModelAttributes} attributes
 */
const patientSurgeryAttributes = {
  patientId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'patient_id',
    onDelete: 'CASCADE',
    references: {
      key: 'id',
      model: 'patient',
    },
  },
  surgeryId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'surgery_id',
    onDelete: 'CASCADE',
    references: {
      key: 'id',
      model: 'surgery',
    },
  },
};

module.exports = patientSurgeryAttributes;

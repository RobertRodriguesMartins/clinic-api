const patientSurgeryAttributes = require('./attributes/patientSurgeryAttributes');
/**
 * @param {import('sequelize').Sequelize} sequelize
 * @type {import('sequelize').Model}
 */
const patientSurgeryGenerator = (sequelize) => {
  const patientSurgery = sequelize.define(
    'patientSurgery',
    patientSurgeryAttributes,
    {
      tableName: 'patient_surgery',
      timestamps: false,
    }
  );

  patientSurgery.associate = (models) => {
    patientSurgery.belongsTo(models.patient, {
      foreignKey: 'patientId',
      as: 'patient',
    });

    patientSurgery.belongsTo(models.surgery, {
      foreignKey: 'surgeryId',
      as: 'surgery',
    });
  };

  return patientSurgery;
};

module.exports = patientSurgeryGenerator;

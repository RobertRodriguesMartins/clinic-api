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

  return patientSurgery;
};

module.exports = patientSurgeryGenerator;

const patientAttributes = require('./attributes/patientAttributes');

/**
 * @param {import('sequelize').Sequelize} sequelize
 * @type {import('sequelize').Model}
 */
const patientGenerator = (sequelize) => {
  const patient = sequelize.define('patient', patientAttributes, {
    tableName: 'patient',
    timestamps: false,
  });

  patient.associate = (models) => {
    patient.belongsTo(models.plan, {
      foreignKey: 'planId',
      as: 'plans',
    });
  };

  return patient;
};

module.exports = patientGenerator;

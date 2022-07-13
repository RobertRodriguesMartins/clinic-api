const surgeryAttributes = require('./attributes/surgeryAttributes');
/**
 * @param {import('sequelize').Sequelize} sequelize
 * @type {import('sequelize').Model}
 */
const surgeryGenerator = (sequelize) => {
  const surgery = sequelize.define('surgery', surgeryAttributes, {
    tableName: 'surgery',
    timestamps: false,
  });

  surgery.associate = (models) => {
    surgery.belongsToMany(models.patient, {
      foreignKey: 'surgeryId',
      as: 'patients',
      through: models.patientSurgery,
    });
  };

  return surgery;
};

module.exports = surgeryGenerator;

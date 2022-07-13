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

  return surgery;
};

module.exports = surgeryGenerator;

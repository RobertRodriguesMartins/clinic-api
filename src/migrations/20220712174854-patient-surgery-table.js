const { patientSurgeryAttributes } = require('../models/patientSurgery');

module.exports = {
  /**
   * @param {import('sequelize').QueryInterface} queryInterface
   */
  async up(queryInterface) {
    return queryInterface.createTable(
      'patient_surgery',
      patientSurgeryAttributes
    );
  },
  /**
   * @param {import('sequelize').QueryInterface} queryInterface
   */
  async down(queryInterface) {
    return queryInterface.dropTable('patientSurgery');
  },
};

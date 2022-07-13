const { patientAttributes } = require('../models/patient');

module.exports = {
  /**
   * @param {import('sequelize').QueryInterface} queryInterface
   */
  async up(queryInterface) {
    return queryInterface.createTable('patient', patientAttributes);
  },
  /**
   * @param {import('sequelize').QueryInterface} queryInterface
   */
  async down(queryInterface) {
    return queryInterface.dropTable('patient');
  },
};

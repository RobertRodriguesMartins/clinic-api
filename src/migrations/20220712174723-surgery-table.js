const { surgeryAttributes } = require('../models/surgery');

module.exports = {
  /**
   * @param {import('sequelize').QueryInterface} queryInterface
   */
  async up(queryInterface) {
    return queryInterface.createTable('surgery', surgeryAttributes);
  },
  /**
   * @param {import('sequelize').QueryInterface} queryInterface
   */
  async down(queryInterface) {
    return queryInterface.dropTable('surgery');
  },
};

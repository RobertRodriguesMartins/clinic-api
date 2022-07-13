const { planAttributes } = require('../models/plan');

module.exports = {
  /**
   * @param {import('sequelize').QueryInterface} queryInterface
   */
  async up(queryInterface) {
    return queryInterface.createTable('plan', planAttributes);
  },
  /**
   * @param {import('sequelize').QueryInterface} queryInterface
   */
  async down(queryInterface) {
    return queryInterface.dropTable('plan');
  },
};

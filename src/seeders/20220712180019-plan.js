module.exports = {
  /**
   * @param {import('sequelize').QueryInterface} queryInterface
   */
  up: async (queryInterface) => {
    return queryInterface.bulkInsert(
      'plan',
      [
        {
          coverage: 'Total',
          price: 549.99,
        },
        {
          coverage: 'Partial',
          price: 349.99,
        },
        {
          coverage: 'Emergencies only',
          price: 109.99,
        },
        {
          coverage: 'Family',
          price: 949.99,
        },
      ],
      {}
    );
  },

  down: async (queryInterface) => {
    return queryInterface.bulkDelete('plan', null, {});
  },
};

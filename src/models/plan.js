const planAttributes = require('./attributes/planAttributes');

/**
 * @param {import('sequelize').Sequelize} sequelize
 * @type {import('sequelize').Model}
 */
const planGenerator = (sequelize) => {
  const plan = sequelize.define('plan', planAttributes, {
    tableName: 'plan',
    timestamps: false,
  });

  plan.associate = (models) => {
    plan.hasMany(models.patient, {
      foreignKey: 'planId',
      as: 'patients',
    });
  };
  return plan;
};

module.exports = planGenerator;

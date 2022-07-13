const Joi = require('joi');
/**
 * @type {{createSchema: import('joi').ObjectSchema, byPlanSchema: import('joi').ObjectSchema}}
 */
const schemas = {
  create: Joi.object({
    fullName: Joi.string().min(1).required(),
    planId: Joi.number().positive().required(),
  }).required(),
  byPlan: Joi.object({
    planId: Joi.number().min(1).required(),
  }).required(),
};

module.exports = schemas;

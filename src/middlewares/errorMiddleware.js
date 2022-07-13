const customErrors = {
  NotFoundError: 404,
  ValidationError: 400,
};
/**
 * @type {import('express').ErrorRequestHandler}
 * @param {Error} err
 */
const errorMiddleware = (err, req, res, next) => {
  const name = err.name;

  const code = customErrors[name];

  if (!code) return res.status(500).json({ message: err.message });

  return res.status(code).json({ message: err.message });
};

module.exports = errorMiddleware;

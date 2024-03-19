const errorHandler = (msg) => {
  const err = new Error(msg);
  err.statusCode = 404;
  return err;
};

module.exports = errorHandler;

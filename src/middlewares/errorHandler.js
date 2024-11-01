const errorHandler = (err, req, res, next) => {
  console.log(err);
  let { statusCode, message } = err;
  res.status(statusCode).json({ code: statusCode, message });
};

export default errorHandler;

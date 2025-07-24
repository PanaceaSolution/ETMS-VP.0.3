const globalErrorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const status = err.status || "error";

  console.error("Something Went Wrong :", err);

  res.status(statusCode).json({
    status,
    message: err.message || "Something went wrong!",
  });
};

export default globalErrorHandler;

const { StatusCodes } = require("http-status-codes");
class ServiceError extends Error {
  constructor(
    message = "Something went wrong",
    explanation = "Service Layer Error",
    statusCode = StatusCodes.INTERNAL_SERVER_ERROR
  ) {
    super();
    (this.name = "Service Error"),
      (this.message = message),
      (this.explanation = explanation),
      (this.statusCode = statusCode);
  }
}
module.exports = ServiceError;

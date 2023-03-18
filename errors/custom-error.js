class CustomAPIError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

const createCustomError = (msg, statusCode) => {
  return new CustomEPIError(msg, statusCode);
};

module.exports = {
  CustomAPIError,
  createCustomError,
};

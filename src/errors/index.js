const httpStatus = require('http-status');

class CustomError extends Error {
  constructor(message, originalError) {
    super(message);

    if (originalError) {
      this.originalError = originalError;
    }
  }
}

class NotFoundError extends CustomError {
  constructor(message = 'Instance not found', originalError) {
    super(message, originalError);
    this.httpStatus = httpStatus.NOT_FOUND;
  }
}

class AuthorizationError extends CustomError {
  constructor(message = 'Forbidden', originalError) {
    super(message, originalError);
    this.httpStatus = httpStatus.FORBIDDEN;
  }
}

class AuthenticationError extends CustomError {
  constructor(message = 'Unauthorized', originalError) {
    super(message, originalError);
    this.httpStatus = httpStatus.UNAUTHORIZED;
  }
}

class InternalError extends CustomError {
  constructor(message = 'Internal server error', originalError) {
    super(message, originalError);
    this.httpStatus = httpStatus.INTERNAL_SERVER_ERROR;
  }
}

module.exports = {
  NotFoundError,
  AuthorizationError,
  AuthenticationError,
  InternalError,
};

/**
 * Custom Exceptions
 * Similar to Django's exception classes
 */

class DjangoException extends Error {
  constructor(message) {
    super(message);
    this.name = 'DjangoException';
  }
}

class ValidationError extends DjangoException {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
  }
}

class Http404 extends DjangoException {
  constructor(message = 'Not Found') {
    super(message);
    this.name = 'Http404';
    this.statusCode = 404;
  }
}

class PermissionDenied extends DjangoException {
  constructor(message = 'Permission Denied') {
    super(message);
    this.name = 'PermissionDenied';
    this.statusCode = 403;
  }
}

class SuspiciousOperation extends DjangoException {
  constructor(message) {
    super(message);
    this.name = 'SuspiciousOperation';
  }
}

module.exports = {
  DjangoException,
  ValidationError,
  Http404,
  PermissionDenied,
  SuspiciousOperation
};

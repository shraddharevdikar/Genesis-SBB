import { AppError, UnauthorizedError, ValidationError } from '@sbb/shared';

export class AuthenticationError extends UnauthorizedError {
  constructor(message: string = 'Authentication failed', details?: any) {
    super(message, details);
  }
}

export class InvalidCredentialsError extends AuthenticationError {
  constructor(message: string = 'Invalid username or password', details?: any) {
    super(message, details);
  }
}

export class TokenExpiredError extends AuthenticationError {
  constructor(message: string = 'Authentication token has expired', details?: any) {
    super(message, details);
  }
}

export class InvalidTokenError extends AuthenticationError {
  constructor(message: string = 'Authentication token is invalid', details?: any) {
    super(message, details);
  }
}

export class PasswordPolicyViolationError extends ValidationError {
  constructor(message: string = 'Password does not meet policy requirements', details?: any) {
    super(message, details);
  }
}

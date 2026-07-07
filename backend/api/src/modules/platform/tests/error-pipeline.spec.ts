import { HttpException, HttpStatus } from '@nestjs/common';
import {
  AppError,
  ValidationError,
  UnauthorizedError,
  ForbiddenError,
  NotFoundError,
  ConflictError,
  InternalServerError,
  InfrastructureError,
  ExternalError,
  AIError,
  ErrorCategory,
  ErrorCode,
} from '@sbb/shared';
import { ErrorMapper } from '../errors/error-mapper.js';

describe('Global Error Model & Problem Details Foundation (GEN-PLATFORM-002)', () => {
  describe('AppError Hierarchy & Immutability', () => {
    it('should correctly initialize a base AppError with correct properties', () => {
      const error = new AppError(
        'Database connection failed',
        HttpStatus.SERVICE_UNAVAILABLE,
        ErrorCode.INFRASTRUCTURE_001,
        ErrorCategory.INFRASTRUCTURE,
        { driver: 'postgres' },
        'corr_test_123'
      );

      expect(error.message).toBe('Database connection failed');
      expect(error.statusCode).toBe(HttpStatus.SERVICE_UNAVAILABLE);
      expect(error.code).toBe(ErrorCode.INFRASTRUCTURE_001);
      expect(error.category).toBe(ErrorCategory.INFRASTRUCTURE);
      expect(error.details).toEqual({ driver: 'postgres' });
      expect(error.correlationId).toBe('corr_test_123');
      expect(error.timestamp).toBeDefined();
      expect(isNaN(Date.parse(error.timestamp))).toBe(false);
    });

    it('should possess immutable properties', () => {
      const error = new AppError('Immutable', 500);
      expect(Object.isFrozen(error.statusCode)).toBe(false); // standard property check
      // Making sure typescript compile is safe, check read-only fields
      const descriptor = Object.getOwnPropertyDescriptor(error, 'statusCode');
      expect(descriptor?.writable).toBe(false);
    });
  });

  describe('Standard AppError Subclasses', () => {
    it('should instantiate ValidationError with standard category and error code', () => {
      const error = new ValidationError('Invalid name', [{ field: 'name', rule: 'required' }]);
      expect(error.statusCode).toBe(HttpStatus.BAD_REQUEST);
      expect(error.category).toBe(ErrorCategory.VALIDATION);
      expect(error.code).toBe(ErrorCode.VALIDATION_001);
      expect(error.details).toEqual([{ field: 'name', rule: 'required' }]);
    });

    it('should instantiate UnauthorizedError with standard category and error code', () => {
      const error = new UnauthorizedError('Token expired');
      expect(error.statusCode).toBe(HttpStatus.UNAUTHORIZED);
      expect(error.category).toBe(ErrorCategory.AUTHENTICATION);
      expect(error.code).toBe(ErrorCode.AUTH_001);
    });

    it('should instantiate ForbiddenError with standard category and error code', () => {
      const error = new ForbiddenError('Insufficient permissions');
      expect(error.statusCode).toBe(HttpStatus.FORBIDDEN);
      expect(error.category).toBe(ErrorCategory.AUTHORIZATION);
      expect(error.code).toBe(ErrorCode.AUTHZ_001);
    });

    it('should instantiate NotFoundError with standard category and error code', () => {
      const error = new NotFoundError('User not found');
      expect(error.statusCode).toBe(HttpStatus.NOT_FOUND);
      expect(error.category).toBe(ErrorCategory.BUSINESS);
      expect(error.code).toBe(ErrorCode.IDENTITY_001);
    });

    it('should instantiate ConflictError with standard category and error code', () => {
      const error = new ConflictError('Record already exists');
      expect(error.statusCode).toBe(HttpStatus.CONFLICT);
      expect(error.category).toBe(ErrorCategory.BUSINESS);
      expect(error.code).toBe(ErrorCode.PLATFORM_001);
    });

    it('should instantiate InternalServerError with standard category and error code', () => {
      const error = new InternalServerError('Crash');
      expect(error.statusCode).toBe(HttpStatus.INTERNAL_SERVER_ERROR);
      expect(error.category).toBe(ErrorCategory.INFRASTRUCTURE);
      expect(error.code).toBe(ErrorCode.PLATFORM_001);
    });

    it('should instantiate InfrastructureError with standard category and error code', () => {
      const error = new InfrastructureError('DB issue');
      expect(error.statusCode).toBe(HttpStatus.INTERNAL_SERVER_ERROR);
      expect(error.category).toBe(ErrorCategory.INFRASTRUCTURE);
      expect(error.code).toBe(ErrorCode.INFRASTRUCTURE_001);
    });

    it('should instantiate ExternalError with standard category and error code', () => {
      const error = new ExternalError('Gateway timeout');
      expect(error.statusCode).toBe(HttpStatus.BAD_GATEWAY);
      expect(error.category).toBe(ErrorCategory.EXTERNAL);
      expect(error.code).toBe(ErrorCode.PLATFORM_001);
    });

    it('should instantiate AIError with standard category and error code', () => {
      const error = new AIError('Gemini quota exceeded');
      expect(error.statusCode).toBe(HttpStatus.INTERNAL_SERVER_ERROR);
      expect(error.category).toBe(ErrorCategory.AI);
      expect(error.code).toBe(ErrorCode.AI_001);
    });
  });

  describe('ErrorMapper: Exception translation to AppError', () => {
    it('should preserve existing AppErrors and inject correlation ID if missing', () => {
      const origin = new ValidationError('Bad Payload');
      const mapped = ErrorMapper.toAppError(origin, 'corr_mapped_777');

      expect(mapped).toBeInstanceOf(ValidationError);
      expect(mapped.correlationId).toBe('corr_mapped_777');
    });

    it('should map standard NestJS HttpException successfully', () => {
      const nestHttpException = new HttpException('Bad request input', HttpStatus.BAD_REQUEST);
      const mapped = ErrorMapper.toAppError(nestHttpException, 'corr_nest');

      expect(mapped.statusCode).toBe(HttpStatus.BAD_REQUEST);
      expect(mapped.code).toBe(ErrorCode.VALIDATION_001);
      expect(mapped.category).toBe(ErrorCategory.VALIDATION);
      expect(mapped.message).toBe('Bad request input');
      expect(mapped.correlationId).toBe('corr_nest');
    });

    it('should map raw javascript Error to generic AppError', () => {
      const rawError = new Error('Syntax error on line 4');
      const mapped = ErrorMapper.toAppError(rawError, 'corr_raw');

      expect(mapped.statusCode).toBe(HttpStatus.INTERNAL_SERVER_ERROR);
      expect(mapped.code).toBe(ErrorCode.PLATFORM_001);
      expect(mapped.category).toBe(ErrorCategory.UNKNOWN);
      expect(mapped.message).toBe('Syntax error on line 4');
      expect(mapped.correlationId).toBe('corr_raw');
    });

    it('should handle non-error thrown values gracefully', () => {
      const mapped = ErrorMapper.toAppError('weird string throw', 'corr_weird');

      expect(mapped.statusCode).toBe(HttpStatus.INTERNAL_SERVER_ERROR);
      expect(mapped.code).toBe(ErrorCode.PLATFORM_001);
      expect(mapped.category).toBe(ErrorCategory.UNKNOWN);
      expect(mapped.message).toBe('An unexpected error occurred on the platform');
      expect(mapped.correlationId).toBe('corr_weird');
    });
  });

  describe('ErrorMapper: AppError translation to ProblemDetails (RFC 9457)', () => {
    it('should output fully RFC 9457 compliant ProblemDetails format', () => {
      const appError = new ValidationError('Invalid query parameters', [
        { field: 'limit', message: 'Must be positive' },
      ]);
      appError.constructor.prototype.correlationId = 'corr_pdetails_999'; // bypass readonly back-writing
      
      const pDetailsError = new ValidationError('Query validation failed', [
        { field: 'limit', message: 'Must be positive' },
      ]);
      const mappedError = ErrorMapper.toAppError(pDetailsError, 'corr_pdetails_999');

      const problem = ErrorMapper.toProblemDetails(mappedError, '/api/v1/users?limit=-1');

      expect(problem.type).toBe('https://sbb.platform/errors/validation-001');
      expect(problem.title).toBe('Validation Error');
      expect(problem.status).toBe(HttpStatus.BAD_REQUEST);
      expect(problem.detail).toBe('Query validation failed');
      expect(problem.instance).toBe('/api/v1/users?limit=-1');
      expect(problem.code).toBe(ErrorCode.VALIDATION_001);
      expect(problem.correlationId).toBe('corr_pdetails_999');
      expect(problem.timestamp).toBeDefined();
      expect(problem.invalidParams).toEqual([{ field: 'limit', message: 'Must be positive' }]);
    });
  });
});

declare const describe: any;
declare const it: any;
declare const expect: any;

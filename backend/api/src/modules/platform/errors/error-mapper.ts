import { HttpException, HttpStatus } from '@nestjs/common';
import { AppError, ErrorCategory, ErrorCode } from '@sbb/shared';
import { ProblemDetails } from './problem-details.model.js';

export class ErrorMapper {
  /**
   * Translates any thrown exception into a standardized AppError.
   */
  public static toAppError(exception: unknown, correlationId?: string): AppError {
    if (exception instanceof AppError) {
      if (correlationId && !exception.correlationId) {
        return new AppError(
          exception.message,
          exception.statusCode,
          exception.code,
          exception.category,
          exception.details,
          correlationId
        );
      }
      return exception;
    }

    if (exception instanceof HttpException) {
      const status = exception.getStatus();
      const responseBody = exception.getResponse();
      let message = exception.message;
      let details: any = undefined;
      let code = ErrorCode.PLATFORM_001;
      let category = ErrorCategory.UNKNOWN;

      if (typeof responseBody === 'object' && responseBody !== null) {
        if ('message' in responseBody) {
          message = Array.isArray((responseBody as any).message)
            ? (responseBody as any).message.join(', ')
            : String((responseBody as any).message);
          
          if (Array.isArray((responseBody as any).message)) {
            details = (responseBody as any).message.map((msg: any) => ({
              message: msg,
            }));
          }
        }
        if ('error' in responseBody) {
          const errorStr = String((responseBody as any).error).toUpperCase().replace(/\s+/g, '_');
          if (errorStr.includes('VALIDATION')) {
            code = ErrorCode.VALIDATION_001;
          }
        }
      }

      // Map HTTP status to appropriate ErrorCategory and ErrorCode
      switch (status) {
        case HttpStatus.BAD_REQUEST:
          code = ErrorCode.VALIDATION_001;
          category = ErrorCategory.VALIDATION;
          break;
        case HttpStatus.UNAUTHORIZED:
          code = ErrorCode.AUTH_001;
          category = ErrorCategory.AUTHENTICATION;
          break;
        case HttpStatus.FORBIDDEN:
          code = ErrorCode.AUTHZ_001;
          category = ErrorCategory.AUTHORIZATION;
          break;
        case HttpStatus.NOT_FOUND:
          code = ErrorCode.IDENTITY_001;
          category = ErrorCategory.BUSINESS;
          break;
        case HttpStatus.CONFLICT:
          code = ErrorCode.PLATFORM_001;
          category = ErrorCategory.BUSINESS;
          break;
        case HttpStatus.UNPROCESSABLE_ENTITY:
          code = ErrorCode.VALIDATION_001;
          category = ErrorCategory.VALIDATION;
          break;
        default:
          code = ErrorCode.PLATFORM_001;
          category = ErrorCategory.UNKNOWN;
      }

      return new AppError(message, status, code, category, details, correlationId);
    }

    if (exception instanceof Error) {
      return new AppError(
        exception.message,
        HttpStatus.INTERNAL_SERVER_ERROR,
        ErrorCode.PLATFORM_001,
        ErrorCategory.UNKNOWN,
        undefined,
        correlationId
      );
    }

    return new AppError(
      'An unexpected error occurred on the platform',
      HttpStatus.INTERNAL_SERVER_ERROR,
      ErrorCode.PLATFORM_001,
      ErrorCategory.UNKNOWN,
      undefined,
      correlationId
    );
  }

  /**
   * Formats an AppError into an RFC 9457 compliant ProblemDetails response object.
   */
  public static toProblemDetails(appError: AppError, instance: string): ProblemDetails {
    const baseUrl = 'https://sbb.platform/errors';
    const type = `${baseUrl}/${appError.code.toLowerCase().replace(/_/g, '-')}`;
    const title = this.getTitleFromCategory(appError.category);

    return {
      type,
      title,
      status: appError.statusCode,
      detail: appError.message,
      instance,
      code: appError.code,
      correlationId: appError.correlationId || 'unknown',
      timestamp: appError.timestamp,
      ...(appError.details ? { details: appError.details } : {}),
      ...(appError.category === ErrorCategory.VALIDATION && appError.details ? { invalidParams: appError.details } : {})
    };
  }

  private static getTitleFromCategory(category: ErrorCategory): string {
    switch (category) {
      case ErrorCategory.VALIDATION:
        return 'Validation Error';
      case ErrorCategory.AUTHENTICATION:
        return 'Authentication Required';
      case ErrorCategory.AUTHORIZATION:
        return 'Permission Denied';
      case ErrorCategory.BUSINESS:
        return 'Business Invariant Violation';
      case ErrorCategory.INFRASTRUCTURE:
        return 'Internal Infrastructure Failure';
      case ErrorCategory.EXTERNAL:
        return 'External Service Integration Error';
      case ErrorCategory.AI:
        return 'AI Integration Error';
      default:
        return 'Internal Platform Error';
    }
  }
}

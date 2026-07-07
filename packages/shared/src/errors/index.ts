export enum ErrorCategory {
  VALIDATION = 'Validation',
  AUTHENTICATION = 'Authentication',
  AUTHORIZATION = 'Authorization',
  BUSINESS = 'Business',
  INFRASTRUCTURE = 'Infrastructure',
  EXTERNAL = 'External',
  AI = 'AI',
  UNKNOWN = 'Unknown'
}

export enum ErrorCode {
  IDENTITY_001 = 'IDENTITY_001',
  AUTH_001 = 'AUTH_001',
  AUTHZ_001 = 'AUTHZ_001',
  PLATFORM_001 = 'PLATFORM_001',
  AI_001 = 'AI_001',
  CRM_001 = 'CRM_001',
  VALIDATION_001 = 'VALIDATION_001',
  INFRASTRUCTURE_001 = 'INFRASTRUCTURE_001',
}

export class AppError extends Error {
  public readonly statusCode: number;
  public readonly code: string;
  public readonly category: ErrorCategory;
  public readonly correlationId?: string;
  public readonly details?: any;
  public readonly timestamp: string;

  constructor(
    message: string,
    statusCode: number = 500,
    code: string = ErrorCode.PLATFORM_001,
    category: ErrorCategory = ErrorCategory.UNKNOWN,
    details?: any,
    correlationId?: string
  ) {
    super(message);
    this.name = this.constructor.name;
    this.statusCode = statusCode;
    this.code = code;
    this.category = category;
    this.details = details;
    this.correlationId = correlationId;
    this.timestamp = new Date().toISOString();
    
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export class ValidationError extends AppError {
  constructor(message: string, details?: any) {
    super(message, 400, ErrorCode.VALIDATION_001, ErrorCategory.VALIDATION, details);
  }
}

export class NotFoundError extends AppError {
  constructor(message: string, details?: any) {
    super(message, 404, ErrorCode.IDENTITY_001, ErrorCategory.BUSINESS, details);
  }
}

export class UnauthorizedError extends AppError {
  constructor(message: string, details?: any) {
    super(message, 401, ErrorCode.AUTH_001, ErrorCategory.AUTHENTICATION, details);
  }
}

export class ForbiddenError extends AppError {
  constructor(message: string, details?: any) {
    super(message, 403, ErrorCode.AUTHZ_001, ErrorCategory.AUTHORIZATION, details);
  }
}

export class ConflictError extends AppError {
  constructor(message: string, details?: any) {
    super(message, 409, ErrorCode.PLATFORM_001, ErrorCategory.BUSINESS, details);
  }
}

export class InternalServerError extends AppError {
  constructor(message: string, details?: any) {
    super(message, 500, ErrorCode.PLATFORM_001, ErrorCategory.INFRASTRUCTURE, details);
  }
}

export class InfrastructureError extends AppError {
  constructor(message: string, details?: any) {
    super(message, 500, ErrorCode.INFRASTRUCTURE_001, ErrorCategory.INFRASTRUCTURE, details);
  }
}

export class ExternalError extends AppError {
  constructor(message: string, details?: any) {
    super(message, 502, ErrorCode.PLATFORM_001, ErrorCategory.EXTERNAL, details);
  }
}

export class AIError extends AppError {
  constructor(message: string, details?: any) {
    super(message, 500, ErrorCode.AI_001, ErrorCategory.AI, details);
  }
}

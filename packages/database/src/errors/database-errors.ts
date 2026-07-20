import { Prisma } from '@prisma/client';
import { AppError, ValidationError, NotFoundError, ConflictError } from '@sbb/shared';

export class DatabaseError extends AppError {
  constructor(message: string, statusCode: number = 500, details?: any) {
    super(message, statusCode, details);
  }
}

export class DatabaseConflictError extends ConflictError {
  constructor(message: string, details?: any) {
    super(message, details);
  }
}

export class DatabaseRecordNotFoundError extends NotFoundError {
  constructor(message: string, details?: any) {
    super(message, details);
  }
}

export class DatabaseValidationError extends ValidationError {
  constructor(message: string, details?: any) {
    super(message, details);
  }
}

/**
 * Translates low-level Prisma execution exceptions into highly structured, descriptive platform errors.
 */
export function handleDatabaseError(error: any): Error {
  if (error && typeof error === 'object' && (error.name === 'PrismaClientKnownRequestError' || error.constructor?.name === 'PrismaClientKnownRequestError')) {
    switch (error.code) {
      case 'P2002': {
        const target = Array.isArray(error.meta?.target)
          ? error.meta.target.join(', ')
          : 'fields';
        return new DatabaseConflictError(
          `Unique constraint violation detected on target: ${target}`,
          error.meta
        );
      }
      case 'P2025':
        return new DatabaseRecordNotFoundError(
          error.message || 'The requested database record was not found.',
          error.meta
        );
      case 'P2003':
        return new DatabaseValidationError(
          'Foreign key validation constraint failed on target reference.',
          error.meta
        );
      default:
        return new DatabaseError(
          `Database query failed [${error.code}]: ${error.message}`,
          500,
          error.meta
        );
    }
  }

  if (error && typeof error === 'object' && (error.name === 'PrismaClientValidationError' || error.constructor?.name === 'PrismaClientValidationError')) {
    return new DatabaseValidationError(`Database query validation error: ${error.message}`);
  }

  if (error && typeof error === 'object' && (error.name === 'PrismaClientInitializationError' || error.constructor?.name === 'PrismaClientInitializationError')) {
    return new DatabaseError(`Database connection initialization error: ${error.message}`, 500);
  }

  if (error instanceof Error) {
    return error;
  }

  return new DatabaseError('An unexpected database execution error occurred.');
}
export interface DatabaseErrorDetails {
  code?: string;
  meta?: Record<string, any>;
  query?: string;
}

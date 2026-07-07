import { ExceptionFilter, Catch, ArgumentsHost, HttpException, HttpStatus, Logger } from '@nestjs/common';
import { Response } from 'express';
import { AppError } from '@sbb/shared';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger('GlobalExceptionFilter');

  public catch(exception: unknown, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<any>();

    const correlationId = request.correlationId || request.traceId || 'unknown';
    const timestamp = new Date().toISOString();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let code = 'INTERNAL_SERVER_ERROR';
    let message = 'An unexpected error occurred on the platform';
    let details: any = undefined;

    if (exception instanceof AppError) {
      status = exception.statusCode;
      code = this.getErrorCodeFromClassName(exception.name);
      message = exception.message;
      details = exception.details;
    } else if (exception instanceof HttpException) {
      status = exception.getStatus();
      const responseBody = exception.getResponse();
      message = exception.message;
      code = this.getErrorCodeFromStatus(status);

      if (typeof responseBody === 'object' && responseBody !== null) {
        if ('message' in responseBody) {
          message = Array.isArray((responseBody as any).message)
            ? (responseBody as any).message.join(', ')
            : String((responseBody as any).message);
        }
        if ('error' in responseBody) {
          code = String((responseBody as any).error).toUpperCase().replace(/\s+/g, '_');
        }
      }
    } else if (exception instanceof Error) {
      message = exception.message;
      code = this.getErrorCodeFromClassName(exception.constructor.name);
    }

    this.logger.error(
      `[${request.method}] ${request.url} - Error Code: ${code} - Message: ${message} - CorrelationId: ${correlationId}`,
      exception instanceof Error ? exception.stack : undefined
    );

    response.status(status).json({
      success: false,
      error: {
        code,
        message,
        ...(details ? { details } : {}),
      },
      correlationId,
      timestamp,
    });
  }

  private getErrorCodeFromClassName(className: string): string {
    return className
      .replace(/Exception$/, '')
      .replace(/Error$/, '')
      .replace(/([a-z0-9])([A-Z])/g, '$1_$2')
      .toUpperCase();
  }

  private getErrorCodeFromStatus(status: number): string {
    switch (status) {
      case HttpStatus.BAD_REQUEST:
        return 'BAD_REQUEST';
      case HttpStatus.UNAUTHORIZED:
        return 'UNAUTHORIZED';
      case HttpStatus.FORBIDDEN:
        return 'FORBIDDEN';
      case HttpStatus.NOT_FOUND:
        return 'NOT_FOUND';
      case HttpStatus.CONFLICT:
        return 'CONFLICT';
      case HttpStatus.UNPROCESSABLE_ENTITY:
        return 'UNPROCESSABLE_ENTITY';
      default:
        return 'INTERNAL_SERVER_ERROR';
    }
  }
}

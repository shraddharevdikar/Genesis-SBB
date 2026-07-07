import { ExceptionFilter, Catch, ArgumentsHost, Logger } from '@nestjs/common';
import { Response } from 'express';
import { ErrorMapper } from '../errors/error-mapper.js';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger('GlobalExceptionFilter');

  public catch(exception: unknown, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<any>();

    const correlationId = request.correlationId || request.traceId || 'unknown';
    const instance = request.url || request.originalUrl || 'unknown';

    // Map incoming exception to a standard AppError
    const appError = ErrorMapper.toAppError(exception, correlationId);

    // Convert AppError to standard RFC 9457 Problem Details
    const problemDetails = ErrorMapper.toProblemDetails(appError, instance);

    this.logger.error(
      `[${request.method || 'UNKNOWN'}] ${instance} - Error Code: ${problemDetails.code} - Title: ${problemDetails.title} - Detail: ${problemDetails.detail} - CorrelationId: ${correlationId}`,
      exception instanceof Error ? exception.stack : undefined
    );

    // Return the Problem Details response directly
    response.status(problemDetails.status).json(problemDetails);
  }
}

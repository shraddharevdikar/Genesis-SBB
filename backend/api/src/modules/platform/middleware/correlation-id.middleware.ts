import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class CorrelationIdMiddleware implements NestMiddleware {
  public use(req: Request, res: Response, next: NextFunction): void {
    const correlationIdHeader = req.headers['x-correlation-id'];
    const requestIdHeader = req.headers['x-request-id'];

    const correlationId = Array.isArray(correlationIdHeader)
      ? correlationIdHeader[0]
      : correlationIdHeader || 'corr_' + Math.random().toString(36).substring(2, 11);

    const requestId = Array.isArray(requestIdHeader)
      ? requestIdHeader[0]
      : requestIdHeader || 'req_' + Math.random().toString(36).substring(2, 11);

    // Attach to request object
    (req as any).correlationId = correlationId;
    (req as any).requestId = requestId;
    (req as any).traceId = correlationId; // Use correlation ID as trace ID by default

    // Set on response headers for visibility/debugging
    res.setHeader('X-Correlation-Id', correlationId);
    res.setHeader('X-Request-Id', requestId);

    next();
  }
}

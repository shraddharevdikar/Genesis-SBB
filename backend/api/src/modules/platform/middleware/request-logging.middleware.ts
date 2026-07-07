import { Injectable, NestMiddleware, Logger } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class RequestLoggingMiddleware implements NestMiddleware {
  private readonly logger = new Logger('RequestPipeline');

  public use(req: Request, res: Response, next: NextFunction): void {
    const { method, originalUrl } = req;
    const start = Date.now();
    const correlationId = (req as any).correlationId || 'none';

    res.on('finish', () => {
      const { statusCode } = res;
      const duration = Date.now() - start;
      this.logger.log(
        `[${method}] ${originalUrl} - Status: ${statusCode} - CorrelationId: ${correlationId} - Duration: ${duration}ms`
      );
    });

    next();
  }
}

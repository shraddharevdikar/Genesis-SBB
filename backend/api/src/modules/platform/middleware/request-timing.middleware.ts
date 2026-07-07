import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class RequestTimingMiddleware implements NestMiddleware {
  public use(req: Request, res: Response, next: NextFunction): void {
    const startTime = process.hrtime();

    res.on('finish', () => {
      const diff = process.hrtime(startTime);
      const durationInMs = (diff[0] * 1e3 + diff[1] * 1e-6).toFixed(2);
      res.setHeader('X-Response-Time', `${durationInMs}ms`);
    });

    next();
  }
}

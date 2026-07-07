import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class FeatureFlagMiddleware implements NestMiddleware {
  public use(req: Request, res: Response, next: NextFunction): void {
    // Placeholder feature flag assignment/evaluation middleware
    (req as any).featureFlags = {
      'new-dashboard': true,
      'beta-features': false,
    };
    next();
  }
}

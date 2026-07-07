import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LocaleMiddleware implements NestMiddleware {
  public use(req: Request, res: Response, next: NextFunction): void {
    // Placeholder locale resolution middleware
    const acceptLanguage = req.headers['accept-language'] || 'en';
    (req as any).resolvedLocale = acceptLanguage;
    next();
  }
}

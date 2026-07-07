import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class IdentityContextMiddleware implements NestMiddleware {
  public use(req: any, res: any, next: () => void): void {
    // Placeholder middleware: No request processing or context modification in this blueprint stage
    next();
  }
}

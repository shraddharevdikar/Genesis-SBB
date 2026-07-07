import { Injectable, NestInterceptor, ExecutionContext, CallHandler, Logger } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class MetricsInterceptor implements NestInterceptor {
  private readonly logger = new Logger('PlatformMetrics');

  public intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const start = Date.now();
    const httpContext = context.switchToHttp();
    const request = httpContext.getRequest();
    const { method, url } = request;

    return next.handle().pipe(
      tap(() => {
        const duration = Date.now() - start;
        this.logger.debug(`[Metrics] ${method} ${url} completed in ${duration}ms`);
      })
    );
  }
}

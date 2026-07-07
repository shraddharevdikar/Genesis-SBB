import { Injectable, NestInterceptor, ExecutionContext, CallHandler, Logger } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuditHookInterceptor implements NestInterceptor {
  private readonly logger = new Logger('PlatformAudit');

  public intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const httpContext = context.switchToHttp();
    const request = httpContext.getRequest();
    const { method, url } = request;
    const userId = request.user?.id || 'anonymous';

    return next.handle().pipe(
      tap(() => {
        // Trigger abstract audit hook placeholder
        this.logger.debug(`[Audit] Action '${method} ${url}' initiated by user '${userId}' was executed successfully.`);
      })
    );
  }
}

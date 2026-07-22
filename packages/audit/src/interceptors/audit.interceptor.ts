import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuditService } from '../audit.service.js';
import { AUDIT_METADATA_KEY, AuditOptions } from '../decorators/audit.decorator.js';

@Injectable()
export class AuditInterceptor implements NestInterceptor {
  constructor(
    private readonly reflector: Reflector,
    private readonly auditService: AuditService
  ) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const startTime = Date.now();

    // Resolve Audit Metadata from decorator
    const auditOptions = this.reflector.getAllAndOverride<AuditOptions>(AUDIT_METADATA_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    const method = request.method;
    const isStateChanging = ['POST', 'PUT', 'PATCH', 'DELETE'].includes(method);

    return next.handle().pipe(
      tap({
        next: async (responseBody) => {
          const duration = Date.now() - startTime;
          await this.logRequest(context, request, duration, 'SUCCESS', responseBody, auditOptions, isStateChanging);
        },
        error: async (err) => {
          const duration = Date.now() - startTime;
          await this.logRequest(context, request, duration, 'FAILED', { error: err.message }, auditOptions, isStateChanging, err);
        },
      })
    );
  }

  private async logRequest(
    context: ExecutionContext,
    request: any,
    duration: number,
    status: string,
    response: any,
    options?: AuditOptions,
    isStateChanging: boolean = false,
    error?: any
  ) {
    // Only audit if decorator is present, or if it is a state-changing method
    if (!options && !isStateChanging) {
      return;
    }

    const user = request?.user;
    const ip = request?.ip || request?.headers?.['x-forwarded-for'] || '127.0.0.1';
    const userAgent = request?.headers?.['user-agent'] || 'Unknown';
    const endpoint = request?.originalUrl || request?.url || 'UNKNOWN_URL';
    const method = request?.method || 'UNKNOWN_METHOD';

    // Standard correlation/session trace IDs
    const correlationId = request?.headers?.['x-correlation-id'] || `corr-${Math.random().toString(36).substring(2, 9)}`;
    const sessionId = request?.headers?.['x-session-id'] || null;

    // Fallback actions and resources
    const actionMap: Record<string, string> = {
      POST: 'CREATE',
      PUT: 'UPDATE',
      PATCH: 'UPDATE',
      DELETE: 'DELETE',
      GET: 'READ',
    };

    const action = options?.action || actionMap[method] || 'SYSTEM';
    const resourceType = options?.resource || 'HTTP_ENDPOINT';
    
    // Resource ID lookup (from path parameter or request body/response body)
    const resourceId = request?.params?.id || request?.body?.id || response?.id || 'UNKNOWN';

    const actorId = user?.id || 'ANONYMOUS';

    await this.auditService.createAuditLog({
      actorId,
      entity: resourceType,
      entityId: resourceId,
      action,
      payload: {
        method,
        endpoint,
        params: request?.params || {},
        query: request?.query || {},
      },
      tenantId: user?.tenantId || null,
      organizationId: user?.organizationId || null,
      userId: user?.id || null,
      sessionId,
      ipAddress: Array.isArray(ip) ? ip[0] : ip,
      userAgent,
      resourceType,
      resourceId,
      status: error ? 'FAILED' : 'SUCCESS',
      severity: options?.severity || (error ? 'WARNING' : 'INFO'),
      beforeState: request?.body || null,
      afterState: response || null,
      metadata: {
        executionTimeMs: duration,
        responseStatus: error ? (error.status || 500) : 200,
      },
      correlationId,
    });
  }
}

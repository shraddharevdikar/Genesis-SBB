import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface StandardResponseEnvelope<T> {
  success: boolean;
  data: T;
  metadata: Record<string, any>;
  traceId: string;
}

@Injectable()
export class ResponseTransformInterceptor<T> implements NestInterceptor<T, StandardResponseEnvelope<T>> {
  public intercept(context: ExecutionContext, next: CallHandler): Observable<StandardResponseEnvelope<T>> {
    const httpContext = context.switchToHttp();
    const request = httpContext.getRequest();
    const traceId = (request as any).correlationId || (request as any).traceId || 'unknown';

    return next.handle().pipe(
      map((data) => {
        // If data is already in standard format, return it directly
        if (data && typeof data === 'object' && 'success' in data && 'traceId' in data) {
          return data;
        }

        // Extract metadata or default to empty object
        const metadata = (data && typeof data === 'object' && 'metadata' in data) ? (data as any).metadata : {};
        const responseData = (data && typeof data === 'object' && 'data' in data && 'success' in data) ? (data as any).data : data;

        return {
          success: true,
          data: responseData ?? null,
          metadata: metadata || {},
          traceId,
        };
      })
    );
  }
}

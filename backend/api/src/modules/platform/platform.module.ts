import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { HealthModule } from './health/health.module.js';
import { GlobalExceptionFilter } from './filters/global-exception.filter.js';
import { ResponseTransformInterceptor } from './interceptors/response-transform.interceptor.js';
import { MetricsInterceptor } from './interceptors/metrics.interceptor.js';
import { AuditHookInterceptor } from './interceptors/audit-hook.interceptor.js';
import { CorrelationIdMiddleware } from './middleware/correlation-id.middleware.js';
import { RequestLoggingMiddleware } from './middleware/request-logging.middleware.js';
import { RequestTimingMiddleware } from './middleware/request-timing.middleware.js';

@Module({
  imports: [HealthModule],
  providers: [
    {
      provide: APP_FILTER,
      useClass: GlobalExceptionFilter,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponseTransformInterceptor,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: MetricsInterceptor,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: AuditHookInterceptor,
    },
  ],
})
export class PlatformModule implements NestModule {
  public configure(consumer: MiddlewareConsumer): void {
    consumer
      .apply(
        CorrelationIdMiddleware,
        RequestTimingMiddleware,
        RequestLoggingMiddleware
      )
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}

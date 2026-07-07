import { GlobalExceptionFilter } from '../filters/global-exception.filter.js';
import { ResponseTransformInterceptor } from '../interceptors/response-transform.interceptor.js';
import { MetricsInterceptor } from '../interceptors/metrics.interceptor.js';
import { AuditHookInterceptor } from '../interceptors/audit-hook.interceptor.js';
import { CorrelationIdMiddleware } from '../middleware/correlation-id.middleware.js';
import { RequestTimingMiddleware } from '../middleware/request-timing.middleware.js';
import { ZodValidationPipe } from '../pipes/zod-validation.pipe.js';
import { HealthController } from '../health/health.controller.js';
import { DatabaseHealthIndicator } from '../health/indicators/database-health.indicator.js';
import { RedisHealthIndicator } from '../health/indicators/redis-health.indicator.js';
import { AIProviderHealthIndicator } from '../health/indicators/ai-provider-health.indicator.js';
import { QueueHealthIndicator } from '../health/indicators/queue-health.indicator.js';
import { StorageHealthIndicator } from '../health/indicators/storage-health.indicator.js';
import { AppError, ValidationError } from '@sbb/shared';
import { z } from 'zod';
import { of } from 'rxjs';

describe('API Gateway & Request Pipeline Foundation', () => {
  describe('CorrelationIdMiddleware', () => {
    it('should assign a correlation ID and request ID if missing in request headers', () => {
      const middleware = new CorrelationIdMiddleware();
      const req: any = { headers: {} };
      const res: any = { setHeader: jest.fn() };
      const next = jest.fn();

      middleware.use(req, res, next);

      expect(req.correlationId).toBeDefined();
      expect(req.requestId).toBeDefined();
      expect(req.traceId).toBeDefined();
      expect(res.setHeader).toHaveBeenCalledTimes(2);
      expect(next).toHaveBeenCalled();
    });

    it('should forward existing correlation ID and request ID from request headers', () => {
      const middleware = new CorrelationIdMiddleware();
      const req: any = {
        headers: {
          'x-correlation-id': 'custom_corr_id',
          'x-request-id': 'custom_req_id',
        },
      };
      const res: any = { setHeader: jest.fn() };
      const next = jest.fn();

      middleware.use(req, res, next);

      expect(req.correlationId).toBe('custom_corr_id');
      expect(req.requestId).toBe('custom_req_id');
      expect(res.setHeader).toHaveBeenCalledWith('X-Correlation-Id', 'custom_corr_id');
      expect(res.setHeader).toHaveBeenCalledWith('X-Request-Id', 'custom_req_id');
      expect(next).toHaveBeenCalled();
    });
  });

  describe('RequestTimingMiddleware', () => {
    it('should attach finish listener on response object', () => {
      const middleware = new RequestTimingMiddleware();
      const req: any = {};
      const res: any = { on: jest.fn() };
      const next = jest.fn();

      middleware.use(req, res, next);

      expect(res.on).toHaveBeenCalledWith('finish', expect.any(Function));
      expect(next).toHaveBeenCalled();
    });
  });

  describe('ResponseTransformInterceptor', () => {
    it('should wrap response values into the standard platform success envelope', async () => {
      const interceptor = new ResponseTransformInterceptor();
      const req = { correlationId: 'test_corr_123' };
      const context: any = {
        switchToHttp: () => ({
          getRequest: () => req,
        }),
      };
      const handler: any = {
        handle: () => of({ key: 'value' }),
      };

      const result$ = interceptor.intercept(context, handler);
      result$.subscribe((envelope) => {
        expect(envelope.success).toBe(true);
        expect(envelope.data).toEqual({ key: 'value' });
        expect(envelope.metadata).toEqual({});
        expect(envelope.traceId).toBe('test_corr_123');
      });
    });

    it('should preserve already formatted responses with traceId', () => {
      const interceptor = new ResponseTransformInterceptor();
      const req = { correlationId: 'test_corr_123' };
      const context: any = {
        switchToHttp: () => ({
          getRequest: () => req,
        }),
      };
      const existingEnvelope = {
        success: true,
        data: 'existing',
        metadata: { page: 1 },
        traceId: 'preserved_trace_id',
      };
      const handler: any = {
        handle: () => of(existingEnvelope),
      };

      const result$ = interceptor.intercept(context, handler);
      result$.subscribe((envelope) => {
        expect(envelope).toEqual(existingEnvelope);
      });
    });
  });

  describe('Metrics & Audit Interceptors', () => {
    it('should execute metrics logging on response completion', () => {
      const interceptor = new MetricsInterceptor();
      const req = { method: 'GET', url: '/test-metrics' };
      const context: any = {
        switchToHttp: () => ({
          getRequest: () => req,
        }),
      };
      const handler: any = {
        handle: () => of('done'),
      };

      const result$ = interceptor.intercept(context, handler);
      result$.subscribe((val) => {
        expect(val).toBe('done');
      });
    });

    it('should execute audit logging on request completion', () => {
      const interceptor = new AuditHookInterceptor();
      const req = { method: 'POST', url: '/test-audit', user: { id: 'usr_1' } };
      const context: any = {
        switchToHttp: () => ({
          getRequest: () => req,
        }),
      };
      const handler: any = {
        handle: () => of('done'),
      };

      const result$ = interceptor.intercept(context, handler);
      result$.subscribe((val) => {
        expect(val).toBe('done');
      });
    });
  });

  describe('GlobalExceptionFilter', () => {
    it('should map standard AppError to normalized ProblemDetails response', () => {
      const filter = new GlobalExceptionFilter();
      const res: any = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const req: any = {
        method: 'GET',
        url: '/test-error',
        correlationId: 'err_corr_1',
      };
      const host: any = {
        switchToHttp: () => ({
          getRequest: () => req,
          getResponse: () => res,
        }),
      };

      const appError = new AppError('Sample NotFound error', 404);
      filter.catch(appError, host);

      expect(res.status).toHaveBeenCalledWith(404);
      expect(res.json).toHaveBeenCalledWith(
        expect.objectContaining({
          type: 'https://sbb.platform/errors/platform-001',
          title: 'Internal Platform Error',
          status: 404,
          detail: 'Sample NotFound error',
          instance: '/test-error',
          code: 'PLATFORM_001',
          correlationId: 'err_corr_1',
          timestamp: expect.any(String),
        })
      );
    });
  });

  describe('ZodValidationPipe', () => {
    it('should return parsed data for valid schema validation', () => {
      const schema = z.object({
        name: z.string(),
        age: z.number().int(),
      });
      const pipe = new ZodValidationPipe(schema);
      const data = { name: 'SBB', age: 2 };

      const result = pipe.transform(data, {} as any);
      expect(result).toEqual(data);
    });

    it('should throw structured ValidationError when schema validation fails', () => {
      const schema = z.object({
        name: z.string(),
      });
      const pipe = new ZodValidationPipe(schema);

      expect(() => pipe.transform({ name: 123 }, {} as any)).toThrow(ValidationError);
    });
  });

  describe('HealthController', () => {
    it('should return UP and state metrics', async () => {
      const controller = new HealthController(
        new DatabaseHealthIndicator(),
        new RedisHealthIndicator(),
        new AIProviderHealthIndicator(),
        new QueueHealthIndicator(),
        new StorageHealthIndicator()
      );
      const health = await controller.getHealth();
      const ready = controller.getReady();
      const live = controller.getLive();

      expect(health.status).toBe('UP');
      expect(ready.status).toBe('READY');
      expect(live.status).toBe('LIVE');
    });
  });
});

declare const jest: any;
declare const describe: any;
declare const it: any;
declare const expect: any;

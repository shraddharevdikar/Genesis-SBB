import { LoggerFactory, LogLevel, StructuredLogger } from '@sbb/logger';
import { TraceProvider, TraceSpan, TraceContext, Metric, Counter, Gauge, Histogram, Timer, AuditEvent, AuditPublisher } from '@sbb/observability';
import { DatabaseHealthIndicator } from '../health/indicators/database-health.indicator.js';
import { RedisHealthIndicator } from '../health/indicators/redis-health.indicator.js';
import { AIProviderHealthIndicator } from '../health/indicators/ai-provider-health.indicator.js';
import { QueueHealthIndicator } from '../health/indicators/queue-health.indicator.js';
import { StorageHealthIndicator } from '../health/indicators/storage-health.indicator.js';

describe('SBB Observability Foundation (GEN-PLATFORM-004)', () => {

  describe('Logger Package', () => {
    it('should create StructuredLogger via LoggerFactory and log messages', () => {
      const logger: StructuredLogger = LoggerFactory.createLogger('test-logger', LogLevel.DEBUG);
      expect(logger).toBeDefined();

      // Ensure logger methods don't throw
      expect(() => {
        logger.info('Test info message');
        logger.debug('Test debug message', { correlationId: 'corr-123' });
        logger.warn('Test warn message', { tenantId: 'tenant-456' });
        logger.error('Test error message', new Error('Something failed'), { module: 'auth' });
        logger.fatal('Test fatal message', new Error('Critical failure'), { traceId: 'trace-789' });
      }).not.toThrow();
    });

    it('should support withContext chaining', () => {
      const logger: StructuredLogger = LoggerFactory.createLogger('test-logger-ctx');
      const contextualLogger = logger.withContext({ tenantId: 'swiss-rail', correlationId: 'corr-xyz' });
      expect(contextualLogger).toBeDefined();

      expect(() => {
        contextualLogger.info('SBB route optimization starting');
      }).not.toThrow();
    });
  });

  describe('Tracing Contracts', () => {
    it('should implement mock Tracing provider, span, and context according to contracts', () => {
      class MockTraceSpan implements TraceSpan {
        public attributes: Record<string, any> = {};
        public status: string = 'UNSET';
        public statusMessage?: string;
        public events: Array<{ name: string; attributes?: Record<string, any> }> = [];
        public ended = false;

        constructor(
          public readonly name: string,
          public readonly context: TraceContext,
          public readonly startTime: number = Date.now()
        ) {}

        setAttribute(key: string, value: any): void {
          this.attributes[key] = value;
        }

        setAttributes(attributes: Record<string, any>): void {
          this.attributes = { ...this.attributes, ...attributes };
        }

        addEvent(name: string, attributes?: Record<string, any>): void {
          this.events.push({ name, attributes });
        }

        setStatus(status: 'UNSET' | 'OK' | 'ERROR', message?: string): void {
          this.status = status;
          this.statusMessage = message;
        }

        end(): void {
          this.ended = true;
        }
      }

      class MockTraceProvider implements TraceProvider {
        private activeSpan?: TraceSpan;

        startSpan(name: string, parentContext?: TraceContext): TraceSpan {
          const context: TraceContext = {
            traceId: parentContext?.traceId || 'trace-mock-id',
            spanId: 'span-mock-id',
            parentSpanId: parentContext?.spanId,
          };
          const span = new MockTraceSpan(name, context);
          this.activeSpan = span;
          return span;
        }

        getCurrentSpan(): TraceSpan | undefined {
          return this.activeSpan;
        }

        inject(context: TraceContext, carrier: Record<string, string>): void {
          carrier['x-trace-id'] = context.traceId;
          carrier['x-span-id'] = context.spanId;
        }

        extract(carrier: Record<string, string>): TraceContext | undefined {
          if (carrier['x-trace-id'] && carrier['x-span-id']) {
            return {
              traceId: carrier['x-trace-id'],
              spanId: carrier['x-span-id'],
            };
          }
          return undefined;
        }
      }

      const provider = new MockTraceProvider();
      const parentCtx: TraceContext = { traceId: 'parent-trace-1', spanId: 'parent-span-1' };
      const span = provider.startSpan('database-query', parentCtx);

      expect(span.name).toBe('database-query');
      expect(span.context.traceId).toBe('parent-trace-1');
      expect(span.context.parentSpanId).toBe('parent-span-1');

      span.setAttribute('query.table', 'users');
      expect(span.attributes['query.table']).toBe('users');

      span.setStatus('OK');
      span.end();
      expect((span as any).ended).toBe(true);

      const carrier: Record<string, string> = {};
      provider.inject(span.context, carrier);
      expect(carrier['x-trace-id']).toBe('parent-trace-1');

      const extracted = provider.extract(carrier);
      expect(extracted?.traceId).toBe('parent-trace-1');
      expect(extracted?.spanId).toBe('span-mock-id');
    });
  });

  describe('Metrics Contracts', () => {
    it('should support Metric structures and behaviors via mock implementations', () => {
      class MockCounter implements Counter {
        public count = 0;
        constructor(
          public readonly name: string,
          public readonly description?: string,
          public readonly labels?: Record<string, string>
        ) {}

        increment(value: number = 1, labels?: Record<string, string>): void {
          this.count += value;
        }
      }

      const counter = new MockCounter('sbb_api_requests_total', 'Total HTTP requests');
      counter.increment();
      counter.increment(5);
      expect(counter.count).toBe(6);
    });
  });

  describe('Audit Contracts', () => {
    it('should support publishing audit events', async () => {
      const publishedEvents: AuditEvent[] = [];

      class MockAuditPublisher implements AuditPublisher {
        publish(event: AuditEvent): void {
          publishedEvents.push(event);
        }
      }

      const publisher = new MockAuditPublisher();
      const event: AuditEvent = {
        id: 'audit-100',
        action: 'user.login',
        status: 'SUCCESS',
        timestamp: new Date().toISOString(),
        actor: 'user-777',
        context: {
          correlationId: 'corr-abc',
          clientIp: '127.0.0.1',
        },
      };

      await publisher.publish(event);
      expect(publishedEvents.length).toBe(1);
      expect(publishedEvents[0].action).toBe('user.login');
    });
  });

  describe('Health Indicators', () => {
    it('should all return UP and mock details', async () => {
      const db = new DatabaseHealthIndicator();
      const redis = new RedisHealthIndicator();
      const ai = new AIProviderHealthIndicator();
      const queue = new QueueHealthIndicator();
      const storage = new StorageHealthIndicator();

      const dbRes = await db.isHealthy();
      const redisRes = await redis.isHealthy();
      const aiRes = await ai.isHealthy();
      const queueRes = await queue.isHealthy();
      const storageRes = await storage.isHealthy();

      expect(dbRes.status).toBe('UP');
      expect(redisRes.status).toBe('UP');
      expect(aiRes.status).toBe('UP');
      expect(queueRes.status).toBe('UP');
      expect(storageRes.status).toBe('UP');
    });
  });
});

declare const describe: any;
declare const it: any;
declare const expect: any;

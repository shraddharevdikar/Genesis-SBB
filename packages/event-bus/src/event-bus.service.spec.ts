import { test } from 'node:test';
import assert from 'node:assert';
import { EventStoreRepository } from './repositories/event-store.repository.js';
import { EventStoreService } from './event-store.service.js';
import { EventSubscriberService } from './event-subscriber.service.js';
import { EventDispatcherService } from './event-dispatcher.service.js';
import { EventPublisherService } from './event-publisher.service.js';
import { EventBusService } from './event-bus.service.js';
import { UserRegisteredEvent } from './events/index.js';

test('EventBus - Publishing, Subscription matching, Priorities & Observability', async () => {
  // Mock DB Setup
  const eventDb = new Map<string, any>();
  const mockDb = {
    eventStore: {
      create: async (args: any) => {
        const record = { ...args.data };
        eventDb.set(record.id, record);
        return record;
      },
      update: async (args: any) => {
        const id = args.where.id;
        const record = eventDb.get(id);
        if (record) {
          const updated = { ...record, ...args.data };
          eventDb.set(id, updated);
          return updated;
        }
        return null;
      },
      findMany: async (args: any) => {
        return Array.from(eventDb.values()).filter((item) => {
          if (args.where?.tenantId && item.tenantId !== args.where.tenantId) return false;
          if (args.where?.status && item.status !== args.where.status) return false;
          return true;
        });
      },
      findUnique: async (args: any) => {
        return eventDb.get(args.where.id) || null;
      }
    }
  } as any;

  const repo = new EventStoreRepository(mockDb);
  const store = new EventStoreService(repo);
  const subscriber = new EventSubscriberService();
  const dispatcher = new EventDispatcherService(subscriber, store);
  const publisher = new EventPublisherService(store, dispatcher);
  const bus = new EventBusService(publisher, subscriber, dispatcher, store);

  // Setup multiple subscribers with priorities
  const executionOrder: string[] = [];

  bus.subscribe('UserRegistered', (event) => {
    executionOrder.push(`UserRegistered_LowPriority_${event.payload.email}`);
  }, { priority: 200, subscriberName: 'Low' });

  bus.subscribe('User*', (event) => {
    executionOrder.push(`UserWildcard_HighPriority_${event.payload.email}`);
  }, { priority: 10, subscriberName: 'High' });

  bus.subscribe('*', (event) => {
    executionOrder.push(`GlobalWildcard_${event.id}`);
  }, { priority: 500, subscriberName: 'Global' });

  // Publish event
  const event = new UserRegisteredEvent({
    source: 'tests',
    tenantId: 'tenant-omega',
    payload: { email: 'architect@genesis-sbb.com' },
  });

  await bus.publish(event);

  // Verify DB Storage
  const stored = eventDb.get(event.id);
  assert.ok(stored);
  assert.equal(stored.eventType, 'UserRegistered');
  assert.equal(stored.status, 'PROCESSED');

  // Verify Priority Execution Order
  // Expected order: Priority 10 (UserWildcard), then Priority 200 (UserRegistered), then Priority 500 (GlobalWildcard)
  assert.equal(executionOrder.length, 3);
  assert.equal(executionOrder[0], 'UserWildcard_HighPriority_architect@genesis-sbb.com');
  assert.equal(executionOrder[1], 'UserRegistered_LowPriority_architect@genesis-sbb.com');
  assert.ok(executionOrder[2].startsWith('GlobalWildcard_'));

  // Verify Observability Metrics
  const metrics = bus.getMetrics();
  assert.equal(metrics.processedCount, 1);
  assert.equal(metrics.failedCount, 0);
  assert.equal(metrics.dlqCount, 0);
  assert.ok(metrics.avgExecutionTimes['High'] !== undefined);
});

test('EventBus - Synchronous/Asynchronous Routing, Retries and DLQ Isolation', async () => {
  const eventDb = new Map<string, any>();
  const mockDb = {
    eventStore: {
      create: async (args: any) => {
        const record = { ...args.data };
        eventDb.set(record.id, record);
        return record;
      },
      update: async (args: any) => {
        const id = args.where.id;
        const record = eventDb.get(id);
        const updated = { ...record, ...args.data };
        eventDb.set(id, updated);
        return updated;
      },
      findMany: async () => Array.from(eventDb.values()),
    }
  } as any;

  const repo = new EventStoreRepository(mockDb);
  const store = new EventStoreService(repo);
  const subscriber = new EventSubscriberService();
  const dispatcher = new EventDispatcherService(subscriber, store);
  const publisher = new EventPublisherService(store, dispatcher);
  const bus = new EventBusService(publisher, subscriber, dispatcher, store);

  // Subscriber that consistently throws error
  let callCount = 0;
  bus.subscribe('FailingEvent', () => {
    callCount++;
    throw new Error('Database write deadlock');
  }, { subscriberName: 'StubbornHandler' });

  const event = {
    id: 'evt-fail-101',
    eventName: 'Failing Job',
    eventType: 'FailingEvent',
    tenantId: 'tenant-corp',
    source: 'jobs',
    payload: { runId: 1 },
    timestamp: new Date(),
    version: 1,
  };

  await bus.publish(event);

  // Verify retry execution (Max 3 attempts, with transitions to DLQ)
  assert.equal(callCount, 3);
  const stored = eventDb.get('evt-fail-101');
  assert.equal(stored.status, 'DLQ');
  assert.equal(stored.attempts, 3);
  assert.ok(stored.errorMessage.includes('Database write deadlock'));

  const metrics = bus.getMetrics();
  assert.equal(metrics.dlqCount, 1);
});

test('EventBus - Historical Event Replays with Multi-Tenant Safety Boundaries', async () => {
  const eventDb = new Map<string, any>();
  
  // Seed past events for different tenants
  const tenantA_Id = 'tenant-A';
  const tenantB_Id = 'tenant-B';

  const rawEvents = [
    {
      id: 'evt-A1',
      event_name: 'Role Assigned',
      event_type: 'RoleAssigned',
      tenant_id: tenantA_Id,
      source: 'identity',
      payload: { role: 'ADMIN' },
      timestamp: new Date(),
      version: 1,
    },
    {
      id: 'evt-B1',
      event_name: 'Role Assigned',
      event_type: 'RoleAssigned',
      tenant_id: tenantB_Id,
      source: 'identity',
      payload: { role: 'MEMBER' },
      timestamp: new Date(),
      version: 1,
    }
  ];

  const mockDb = {
    eventStore: {
      create: async (args: any) => args.data,
      update: async (args: any) => args.data,
      findMany: async (args: any) => {
        return rawEvents.filter((item) => {
          if (args.where?.tenantId !== undefined && item.tenant_id !== args.where.tenantId) return false;
          return true;
        }).map(item => ({
          id: item.id,
          eventName: item.event_name,
          eventType: item.event_type,
          tenantId: item.tenant_id,
          source: item.source,
          payload: item.payload,
          timestamp: item.timestamp,
          version: item.version,
        }));
      }
    }
  } as any;

  const repo = new EventStoreRepository(mockDb);
  const store = new EventStoreService(repo);
  const subscriber = new EventSubscriberService();
  const dispatcher = new EventDispatcherService(subscriber, store);
  const publisher = new EventPublisherService(store, dispatcher);
  const bus = new EventBusService(publisher, subscriber, dispatcher, store);

  // Track replay hits
  const replayedLoads: string[] = [];
  bus.subscribe('RoleAssigned', (event) => {
    replayedLoads.push(`${event.tenantId}_${event.payload.role}`);
  });

  // 1. Replay restricted to Tenant A
  const countA = await bus.replay({ tenantId: tenantA_Id }, tenantA_Id);
  assert.equal(countA, 1);
  assert.equal(replayedLoads.length, 1);
  assert.equal(replayedLoads[0], 'tenant-A_ADMIN');

  // 2. Replay with Tenant B context requesting Tenant A data should be strictly rejected
  await assert.rejects(async () => {
    await bus.replay({ tenantId: tenantA_Id }, tenantB_Id);
  }, (err: any) => err.message.includes('forbidden'));
});

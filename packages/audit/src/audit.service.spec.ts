import { test } from 'node:test';
import assert from 'node:assert';
import { AuditRepository } from './repositories/audit.repository.js';
import { AuditService } from './audit.service.js';
import { ActivityService } from './activity.service.js';
import { AuditInterceptor } from './interceptors/audit.interceptor.js';
import { AuditEventEmitter } from './events/audit.events.js';
import { of } from 'rxjs';

test('AuditRepository - Immutable CRUD and Search', async () => {
  const logsDb = new Map<string, any>();
  
  const mockDb = {
    auditLog: {
      create: async (args: any) => {
        const id = `log-${Math.random().toString(36).substring(2, 9)}`;
        const record = { id, timestamp: new Date(), ...args.data };
        logsDb.set(id, record);
        return record;
      },
      findUnique: async (args: any) => {
        return logsDb.get(args.where.id) || null;
      },
      findMany: async (args: any) => {
        return Array.from(logsDb.values()).filter((item) => {
          if (args.where?.tenantId && item.tenantId !== args.where.tenantId) return false;
          if (args.where?.action && item.action !== args.where.action) return false;
          return true;
        });
      },
      count: async (args: any) => {
        return Array.from(logsDb.values()).filter((item) => {
          if (args.where?.tenantId && item.tenantId !== args.where.tenantId) return false;
          if (args.where?.action && item.action !== args.where.action) return false;
          return true;
        }).length;
      }
    }
  } as any;

  const repo = new AuditRepository(mockDb);

  // 1. Create Log
  const created = await repo.create({
    actorId: 'user-123',
    entity: 'Campaign',
    entityId: 'camp-456',
    action: 'CREATE',
    tenantId: 'tenant-1',
    severity: 'INFO',
  });

  assert.equal(created.actorId, 'user-123');
  assert.equal(created.entity, 'Campaign');
  assert.equal(created.entityId, 'camp-456');

  // 2. Immutability checks
  await assert.rejects(async () => {
    await repo.update();
  }, (err: any) => err.message.includes('cannot be modified'));

  await assert.rejects(async () => {
    await repo.delete();
  }, (err: any) => err.message.includes('cannot be deleted'));

  // 3. Search logs
  const results = await repo.search({ page: 1, limit: 10 } as any, 'tenant-1');
  assert.equal(results.items.length, 1);
  assert.equal(results.total, 1);
});

test('AuditService - Multi-tenant protection & Event Emissions', async () => {
  const logsDb = new Map<string, any>();
  const emittedEvents: string[] = [];

  const mockDb = {
    auditLog: {
      create: async (args: any) => {
        const id = `log-${Math.random().toString(36).substring(2, 9)}`;
        const record = { id, timestamp: new Date(), ...args.data };
        logsDb.set(id, record);
        return record;
      },
      findUnique: async (args: any) => {
        return logsDb.get(args.where.id) || null;
      },
    }
  } as any;

  const repo = new AuditRepository(mockDb);
  const emitter = new AuditEventEmitter();
  
  // Track events
  emitter.on('audit.created', () => emittedEvents.push('created'));
  emitter.on('audit.security_alert', () => emittedEvents.push('security_alert'));
  emitter.on('audit.authorization_denied', () => emittedEvents.push('auth_denied'));

  const service = new AuditService(repo, emitter, mockDb);

  // 1. Create a regular log
  const log = await service.createAuditLog({
    actorId: 'user-1',
    entity: 'Project',
    entityId: 'proj-1',
    action: 'UPDATE',
    tenantId: 'tenant-secure',
  });

  assert.equal(emittedEvents.length, 1);
  assert.equal(emittedEvents[0], 'created');

  // 2. Retrieve log of correct tenant
  const fetched = await service.getAuditLogById(log.id, 'tenant-secure');
  assert.equal(fetched.id, log.id);

  // 3. Cross-tenant retrieval violation should throw and trigger alert
  await assert.rejects(async () => {
    await service.getAuditLogById(log.id, 'tenant-attacker');
  }, (err: any) => err.message.includes('Multi-tenant boundary violation'));

  assert.ok(emittedEvents.includes('security_alert'));

  // 4. Critical security alert emission
  await service.createAuditLog({
    actorId: 'user-1',
    entity: 'SecurityConfig',
    entityId: 'sec-1',
    action: 'AUTHORIZATION_DENIED',
    status: 'DENIED',
    severity: 'CRITICAL',
    tenantId: 'tenant-secure',
  });

  assert.ok(emittedEvents.includes('auth_denied'));
});

test('ActivityService - Friendly Description Mapping & Filters', async () => {
  const mockLogs = [
    {
      id: 'act-1',
      actorId: 'user-1',
      userId: 'user-1',
      entity: 'Campaign',
      entityId: 'camp-1',
      action: 'CREATE',
      tenantId: 'tenant-1',
      timestamp: new Date(),
    },
    {
      id: 'act-2',
      actorId: 'ai-engine',
      entity: 'PredictiveAnalysis',
      entityId: 'analysis-1',
      action: 'AI_ACTION',
      tenantId: 'tenant-1',
      timestamp: new Date(),
    }
  ];

  const mockDb = {
    auditLog: {
      findMany: async () => mockLogs,
    }
  } as any;

  const emitter = new AuditEventEmitter();
  const activityService = new ActivityService(mockDb, emitter);

  const activities = await activityService.getRecentActivities({}, 'tenant-1');
  assert.equal(activities.length, 2);
  
  // Custom friendly description assert
  assert.ok(activities[0].description.includes('created new Campaign'));
  assert.ok(activities[1].description.includes('AI Engine completed PredictiveAnalysis action'));
});

test('AuditInterceptor - HTTP Request Auditing', async () => {
  let createdDto: any = null;

  const mockAuditService = {
    createAuditLog: async (dto: any) => {
      createdDto = dto;
      return { id: 'log-123', ...dto };
    }
  } as any;

  const reflector = {
    getAllAndOverride: () => {
      return { action: 'APPROVE', resource: 'Invoice', severity: 'INFO' };
    }
  } as any;

  const interceptor = new AuditInterceptor(reflector, mockAuditService);

  const request = {
    method: 'POST',
    url: '/api/invoices/inv-999/approve',
    originalUrl: '/api/invoices/inv-999/approve',
    user: { id: 'user-manager', tenantId: 'tenant-corp', organizationId: 'org-hq' },
    params: { id: 'inv-999' },
    body: { memo: 'Approved for Q3' },
    headers: {
      'user-agent': 'Mozilla/5.0',
      'x-correlation-id': 'corr-abc-123'
    },
    ip: '192.168.1.50'
  };

  const context = {
    switchToHttp: () => ({
      getRequest: () => request
    }),
    getHandler: () => ({}),
    getClass: () => ({})
  } as any;

  const next = {
    handle: () => of({ success: true })
  } as any;

  // Intercept the execution pipeline
  interceptor.intercept(context, next).subscribe({
    next: async () => {
      // Small timeout to allow async log tap hook to complete
      await new Promise(resolve => setTimeout(resolve, 50));
      assert.ok(createdDto);
      assert.equal(createdDto.actorId, 'user-manager');
      assert.equal(createdDto.action, 'APPROVE');
      assert.equal(createdDto.resourceType, 'Invoice');
      assert.equal(createdDto.resourceId, 'inv-999');
      assert.equal(createdDto.tenantId, 'tenant-corp');
      assert.equal(createdDto.correlationId, 'corr-abc-123');
    }
  });
});

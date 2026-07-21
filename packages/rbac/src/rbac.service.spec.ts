import { test } from 'node:test';
import assert from 'node:assert';
import { PermissionCacheService } from './cache/permission-cache.service.js';
import { RbacService } from './rbac.service.js';
import { AuthorizationService } from './authorization.service.js';

test('PermissionCacheService - set, get, invalidate', () => {
  const cache = new PermissionCacheService();

  assert.equal(cache.get('user-1'), null);

  cache.set('user-1', ['marketing:read'], ['role-1']);
  assert.deepEqual(cache.get('user-1'), ['marketing:read']);

  // Test invalidating by specific user
  cache.invalidateUser('user-1');
  assert.equal(cache.get('user-1'), null);

  // Test invalidating by role
  cache.set('user-2', ['sales:approve'], ['role-2']);
  assert.deepEqual(cache.get('user-2'), ['sales:approve']);
  cache.invalidateRole('role-2');
  assert.equal(cache.get('user-2'), null);
});

test('RbacService & AuthorizationService - permission resolution & tenant boundaries', async () => {
  const cache = new PermissionCacheService();

  // Mock databases
  const usersDb = new Map<string, any>();
  const rolesDb = new Map<string, any>();

  const mockDb = {
    user: {
      findUnique: async (args: any) => {
        return usersDb.get(args.where.id) || null;
      },
    },
    role: {
      findMany: async (args: any) => {
        // Find matching roles by names in the specific organization
        const orgId = args.where.organizationId;
        const names = args.where.name.in;
        return Array.from(rolesDb.values()).filter(
          (r) => r.organizationId === orgId && names.includes(r.name)
        );
      },
    },
    auditLog: {
      create: async (args: any) => {
        return { id: 'audit-123', ...args.data };
      },
    },
  } as any;

  const rbacService = new RbacService(mockDb, cache);
  const authService = new AuthorizationService(rbacService, mockDb);

  // Setup test mock data
  const tenantId = 'tenant-abc';
  const orgId = 'org-xyz';

  usersDb.set('user-emp', {
    id: 'user-emp',
    tenantId,
    organizationId: orgId,
    status: 'ACTIVE',
    deletedAt: null,
    userRoles: [
      {
        role: {
          id: 'role-emp',
          name: 'Employee',
          organizationId: orgId,
          deletedAt: null,
        },
      },
    ],
  });

  usersDb.set('user-admin', {
    id: 'user-admin',
    tenantId,
    organizationId: orgId,
    status: 'ACTIVE',
    deletedAt: null,
    userRoles: [
      {
        role: {
          id: 'role-admin',
          name: 'Organization Admin',
          organizationId: orgId,
          deletedAt: null,
        },
      },
    ],
  });

  rolesDb.set('role-emp', {
    id: 'role-emp',
    name: 'Employee',
    organizationId: orgId,
    deletedAt: null,
    rolePermissions: [
      {
        permission: { key: 'marketing:read' },
      },
    ],
  });

  rolesDb.set('role-mgr', {
    id: 'role-mgr',
    name: 'Department Manager',
    organizationId: orgId,
    deletedAt: null,
    rolePermissions: [
      {
        permission: { key: 'marketing:create' },
      },
    ],
  });

  rolesDb.set('role-admin', {
    id: 'role-admin',
    name: 'Organization Admin',
    organizationId: orgId,
    deletedAt: null,
    rolePermissions: [
      {
        permission: { key: 'marketing:update' },
      },
    ],
  });

  // 1. Resolve active user permissions without hierarchy (Employee role)
  const empPermissions = await rbacService.getUserPermissions('user-emp');
  assert.ok(empPermissions.includes('marketing:read'));
  assert.equal(empPermissions.length, 1);

  // 2. Resolve active user permissions with hierarchy (Organization Admin inherits Department Manager & Employee)
  const adminPermissions = await rbacService.getUserPermissions('user-admin');
  // Organization Admin has its own (marketing:update) + Department Manager (marketing:create) + Employee (marketing:read)
  assert.ok(adminPermissions.includes('marketing:update'));
  assert.ok(adminPermissions.includes('marketing:create'));
  assert.ok(adminPermissions.includes('marketing:read'));

  // 3. Test caching behavior (cache should contain resolved values)
  assert.deepEqual(cache.get('user-admin'), adminPermissions);

  // 4. Test hasPermission helper in AuthorizationService
  const hasRead = await authService.hasPermission('user-emp', 'marketing:read');
  const hasUpdate = await authService.hasPermission('user-emp', 'marketing:update');
  assert.equal(hasRead, true);
  assert.equal(hasUpdate, false);

  // 5. Test multi-tenant isolation boundaries
  const context = {
    userId: 'user-emp',
    tenantId,
    organizationId: orgId,
    roles: ['Employee'],
  };

  // Same tenant and organization -> OK
  const isOk = await authService.authorize(context, tenantId, orgId, () => true);
  assert.equal(isOk, true);

  // Cross-tenant -> should throw ForbiddenException
  await assert.rejects(
    async () => {
      await authService.authorize(context, 'tenant-attacker', orgId, () => true);
    },
    (err: any) => {
      return err.message.includes('Multi-tenant boundary violation');
    }
  );
});

import { UserRole, UserStatus } from '@sbb/types';
import { TestUuids, TestClock } from '../helpers/index.js';

export const mockUserFixture = {
  id: TestUuids.user,
  email: 'test.user@sbb.internal',
  firstName: 'Test',
  lastName: 'User',
  displayName: 'Test User',
  role: UserRole.MEMBER,
  status: UserStatus.ACTIVE,
  emailVerified: true,
  mfaEnabled: false,
  createdAt: TestClock.EPOCH.toISOString(),
  updatedAt: TestClock.EPOCH.toISOString(),
  deletedAt: null,
};

export const mockAdminFixture = {
  id: TestUuids.admin,
  email: 'admin@sbb.internal',
  firstName: 'SBB',
  lastName: 'Administrator',
  displayName: 'Admin SBB',
  role: UserRole.ADMIN,
  status: UserStatus.ACTIVE,
  emailVerified: true,
  mfaEnabled: true,
  createdAt: TestClock.EPOCH.toISOString(),
  updatedAt: TestClock.EPOCH.toISOString(),
  deletedAt: null,
};

export const mockTenantFixture = {
  id: TestUuids.tenant,
  name: 'SBB Test Tenant',
  domain: 'test-tenant.sbb.internal',
  status: 'active',
  billingPlan: 'enterprise',
  settings: {
    maxUsers: 100,
    storageLimitGb: 500,
    allowedRegions: ['us-east-1', 'eu-west-1'],
    enableSso: true,
  },
  createdAt: TestClock.EPOCH.toISOString(),
  updatedAt: TestClock.EPOCH.toISOString(),
  deletedAt: null,
};

export const mockOrganizationFixture = {
  id: TestUuids.organization,
  tenantId: TestUuids.tenant,
  name: 'Core Operations Division',
  billingTier: 'premium',
  settings: {
    restrictDomains: true,
    allowedDomainList: ['sbb.internal'],
    idleTimeoutMinutes: 30,
  },
  createdAt: TestClock.EPOCH.toISOString(),
  updatedAt: TestClock.EPOCH.toISOString(),
  deletedAt: null,
};

export const mockWorkflowFixture = {
  id: TestUuids.workflow,
  name: 'Standard Deploy Automation',
  status: 'active',
  steps: [
    { id: 'step-1', name: 'Lint and Validate', order: 1, type: 'validation' },
    { id: 'step-2', name: 'Build Artifacts', order: 2, type: 'build' },
    { id: 'step-3', name: 'Execute Integration Suite', order: 3, type: 'test' },
  ],
  createdAt: TestClock.EPOCH.toISOString(),
  updatedAt: TestClock.EPOCH.toISOString(),
  deletedAt: null,
};

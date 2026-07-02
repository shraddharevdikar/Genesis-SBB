import { UserRole, UserStatus } from '@sbb/types';
import { TestUuids, generateTestUuid, TestClock } from '../helpers/index.js';
import { UserBuilder, TenantBuilder, OrganizationBuilder } from '../builders/index.js';

let userSequence = 1;
let tenantSequence = 1;
let orgSequence = 1;

/**
 * Resets all auto-increment sequence counters back to 1.
 */
export function resetSequenceCounters(): void {
  userSequence = 1;
  tenantSequence = 1;
  orgSequence = 1;
}

/**
 * Generates a mock user using the UserBuilder, automatically managing sequence fields.
 */
export function createUserMock(overrides?: {
  role?: UserRole;
  status?: UserStatus;
  mfaEnabled?: boolean;
}) {
  const seq = userSequence++;
  const builder = new UserBuilder()
    .withId(generateTestUuid(`u-${seq}`))
    .withEmail(`user-${seq}@sbb.internal`)
    .withName(`First-${seq}`, `Last-${seq}`);

  if (overrides?.role) builder.withRole(overrides.role);
  if (overrides?.status) builder.withStatus(overrides.status);
  if (overrides?.mfaEnabled !== undefined) builder.withMfa(overrides.mfaEnabled);

  return builder.build();
}

/**
 * Generates a mock tenant using the TenantBuilder, automatically managing sequence fields.
 */
export function createTenantMock(overrides?: {
  billingPlan?: 'free' | 'growth' | 'enterprise';
}) {
  const seq = tenantSequence++;
  const builder = new TenantBuilder()
    .withId(generateTestUuid(`t-${seq}`))
    .withName(`Tenant Division ${seq}`)
    .withDomain(`tenant-${seq}.sbb.internal`);

  if (overrides?.billingPlan) builder.withBillingPlan(overrides.billingPlan);

  return builder.build();
}

/**
 * Generates a list of mock users of specified count.
 */
export function createUserMockList(count: number): ReturnType<typeof createUserMock>[] {
  const users = [];
  for (let i = 0; i < count; i++) {
    users.push(createUserMock());
  }
  return users;
}

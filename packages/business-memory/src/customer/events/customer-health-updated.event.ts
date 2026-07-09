import { CustomerHealth } from '../health/customer-health.js';

export interface CustomerHealthUpdatedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly customerOrganizationId: string;
  readonly previousNumericalScore?: number;
  readonly newHealth: CustomerHealth;
  readonly updatedByRoleId: string;
  readonly timestamp: Date;
}

import { BusinessHealthIndex } from '../health/business-health-index.js';

export interface EnterpriseHealthUpdatedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly previousHealthScore?: number;
  readonly newHealthIndex: BusinessHealthIndex;
  readonly updatedByRoleId: string;
  readonly timestamp: Date;
}

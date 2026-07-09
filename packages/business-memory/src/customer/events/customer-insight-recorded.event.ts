import { CustomerInsight } from '../insights/customer-insight.js';

export interface CustomerInsightRecordedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly customerOrganizationId: string;
  readonly insight: CustomerInsight;
  readonly recordedByRoleId: string;
  readonly timestamp: Date;
}

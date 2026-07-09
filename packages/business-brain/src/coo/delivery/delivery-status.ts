import { MilestoneHealth } from './milestone-health.js';
import { SlaStatus } from './sla-status.js';

export interface DeliveryStatus {
  readonly deliveryId: string;
  readonly tenantId: string;
  readonly initiativeName: string;
  readonly milestones: MilestoneHealth[];
  readonly slaStatuses: SlaStatus[];
  readonly blockers: string[];
  readonly overallStatus: 'CRITICAL' | 'WARNING' | 'HEALTHY';
  readonly updatedBy: string;
  readonly updatedAt: Date;
}

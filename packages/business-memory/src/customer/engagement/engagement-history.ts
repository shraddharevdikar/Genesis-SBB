import { InteractionSummary } from './interaction-summary.js';
import { CustomerMilestone } from './milestone.js';

export interface EngagementHistory {
  readonly historyId: string;
  readonly tenantId: string;
  readonly customerOrganizationId: string;
  readonly interactions: InteractionSummary[];
  readonly milestones: CustomerMilestone[];
  readonly lastActiveAt: Date;
  readonly totalInteractionsCount: number;
}

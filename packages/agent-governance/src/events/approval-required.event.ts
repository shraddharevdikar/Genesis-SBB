import { GovernanceId } from '../identity/governance-id.js';

export interface ApprovalRequiredEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly governanceId: GovernanceId;
  readonly targetResourceId: string;
  readonly triggerRuleId: string;
  readonly requiredRolesList: string[];
  readonly descriptionMessage: string;
  readonly traceId: string;
  readonly timestamp: Date;
}

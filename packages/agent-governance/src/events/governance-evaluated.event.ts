import { GovernanceId } from '../identity/governance-id.js';

export interface GovernanceEvaluatedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly governanceId: GovernanceId;
  readonly targetResourceId: string;
  readonly isApproved: boolean;
  readonly decisionCode: 'ALLOW' | 'REJECT' | 'PENDING_APPROVAL_GATE';
  readonly reasoningText: string;
  readonly detectedRiskLevel: 'NONE' | 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
  readonly appliedPolicyIdsList: string[];
  readonly traceId: string;
  readonly timestamp: Date;
}

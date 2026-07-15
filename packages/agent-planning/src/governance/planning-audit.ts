import { PlanningId } from '../identity/planning-id.js';

export interface PlanningAudit {
  readonly auditId: string;
  readonly tenantId: string;
  readonly planningId: PlanningId;
  readonly actionName: 'DECOMPOSED' | 'DRAFTED' | 'RISK_ASSESSED' | 'OPTIMIZED' | 'SUBMITTED' | 'APPROVED' | 'REJECTED';
  readonly triggeredParticipantId: string;
  readonly summaryDetailsText: string;
  readonly recordedAt: Date;
}

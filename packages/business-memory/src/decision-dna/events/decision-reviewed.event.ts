import { DecisionRecord } from '../core/decision-record.js';

export interface DecisionReviewedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly decisionId: string;
  readonly previousState?: Partial<DecisionRecord>;
  readonly reviewedDecision: DecisionRecord;
  readonly reviewerRoleId: string;
  readonly timestamp: Date;
}

import { DecisionRecord } from '../core/decision-record.js';

export interface DecisionRecordedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly decision: DecisionRecord;
  readonly recordedByRoleId: string;
  readonly timestamp: Date;
}

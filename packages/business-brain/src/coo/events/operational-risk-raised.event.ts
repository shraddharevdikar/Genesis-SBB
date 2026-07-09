import { OperationalRisk } from '../risk/operational-risk.js';

export interface OperationalRiskRaisedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly risk: OperationalRisk;
  readonly severityScore: number; // e.g., probability * severity
  readonly raisedAt: Date;
}

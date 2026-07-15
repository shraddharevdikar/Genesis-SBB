import { ObservationId } from '../identity/observation-id.js';

export interface TrustObservation {
  readonly observationId: ObservationId;
  readonly tenantId: string;
  readonly agentId: string;
  readonly previousTrustScore: number; // 0.0 - 100.0
  readonly updatedTrustScore: number; // 0.0 - 100.0
  readonly fluctuationReasonCode: string; // e.g. "SLA_LAG_RECOVERY", "POLICY_ALERT_TRIGGERED"
  readonly qualitativeNotesText?: string;
  readonly calculatedAt: Date;
}

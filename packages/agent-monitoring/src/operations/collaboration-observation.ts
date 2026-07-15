import { ObservationId } from '../identity/observation-id.js';

export interface CollaborationObservation {
  readonly observationId: ObservationId;
  readonly tenantId: string;
  readonly discussionId: string;
  readonly initiatingAgentId: string;
  readonly participatingAgentIdsList: string[];
  readonly messageExchangeCount: number;
  readonly hasConflictingPlansDetected: boolean;
  readonly resolutionDurationMs?: number;
  readonly isResolvedSuccessfully: boolean;
  readonly observedAt: Date;
}

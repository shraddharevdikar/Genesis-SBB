import { ObservationId } from '../identity/observation-id.js';

export interface ExecutionObservation {
  readonly observationId: ObservationId;
  readonly tenantId: string;
  readonly executionSessionId: string;
  readonly observedStepId?: string;
  readonly observedAgentId: string;
  readonly actionTypeString: string; // e.g. "START_STEP", "CHECKPOINT", "COMPENSATING_ACTION"
  readonly stateBeforeChangeJson?: string;
  readonly stateAfterChangeJson?: string;
  readonly operationalDurationMs: number;
  readonly observedAt: Date;
}

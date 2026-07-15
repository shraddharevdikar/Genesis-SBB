import { ObservationId } from '../identity/observation-id.js';

export interface PolicyObservation {
  readonly observationId: ObservationId;
  readonly tenantId: string;
  readonly policyCode: string;
  readonly targetResourceId: string;
  readonly wasAllowed: boolean;
  readonly decisionExplanationText: string;
  readonly evaluatingAgentId?: string;
  readonly observedAt: Date;
}

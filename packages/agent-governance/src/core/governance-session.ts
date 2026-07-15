import { GovernanceId } from '../identity/governance-id.js';
import { GovernanceLifecycleState } from './governance-lifecycle.js';

export interface GovernanceSession {
  readonly sessionId: string;
  readonly governanceId: GovernanceId;
  readonly tenantId: string;
  readonly targetResourceId: string; // The specific goal, plan, or execution block ID being evaluated
  readonly state: GovernanceLifecycleState;
  readonly establishedAt: Date;
  readonly lastModifiedAt: Date;
}

import { ExecutionSessionId } from '../identity/execution-session-id.js';
import { ExecutionId } from '../identity/execution-id.js';
import { ExecutionLifecycleState } from './execution-lifecycle.js';

export interface ExecutionSession {
  readonly sessionId: ExecutionSessionId;
  readonly executionId: ExecutionId;
  readonly tenantId: string;
  readonly approvedPlanId: string; // References @sbb/agent-planning execution plan ID
  readonly currentState: ExecutionLifecycleState;
  readonly currentPhaseId?: string;
  readonly currentStepId?: string;
  readonly startedAt: Date;
  readonly lastUpdatedAt: Date;
}

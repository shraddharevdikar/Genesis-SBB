import { ExecutionContext } from './execution-context.js';
import { ExecutionSession } from './execution-session.js';
import { ExecutionId } from '../identity/execution-id.js';
import { ExecutionProgress } from '../steps/execution-progress.js';
import { RecoveryStrategy } from '../recovery/recovery-strategy.js';
import { ExecutionStrategy } from '../strategy/execution-strategy.js';

export interface AgentExecution {
  /**
   * Initializes and activates a new execution session block for an approved plan.
   */
  startExecution(
    tenantId: string,
    approvedPlanId: string,
    strategy: ExecutionStrategy,
    context: ExecutionContext
  ): Promise<ExecutionSession>;

  /**
   * Begins the orchestration workflow sequence, calling resource and container coordinators.
   */
  executeApprovedPlan(
    tenantId: string,
    executionId: ExecutionId,
    context: ExecutionContext
  ): Promise<void>;

  /**
   * Actively coordinates step distribution dispatchers and updates session boundaries.
   */
  coordinateExecution(
    tenantId: string,
    executionId: ExecutionId,
    context: ExecutionContext
  ): Promise<ExecutionSession>;

  /**
   * Polls or updates current progress status indicators, milestones, and snapshots.
   */
  trackProgress(
    tenantId: string,
    executionId: ExecutionId,
    context: ExecutionContext
  ): Promise<ExecutionProgress>;

  /**
   * Invokes retry mechanisms, rollback routines, or switches strategy on operational failure.
   */
  handleFailure(
    tenantId: string,
    executionId: ExecutionId,
    failingStepId: string,
    failureCode: string,
    context: ExecutionContext
  ): Promise<RecoveryStrategy>;

  /**
   * Concludes the session, tearing down runtime container environments and logs.
   */
  completeExecution(
    tenantId: string,
    executionId: ExecutionId,
    context: ExecutionContext
  ): Promise<void>;
}

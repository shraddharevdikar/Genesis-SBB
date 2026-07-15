import { RetryPolicy } from './retry-policy.js';
import { RollbackPlan } from './rollback-plan.js';

export interface RecoveryStrategy {
  readonly strategyId: string;
  readonly targetExecutionId: string;
  readonly triggerFailureCode: string; // e.g. "SBB_API_TIMEOUT"
  readonly actionToTake: 'RETRY' | 'ROLLBACK_AND_FAIL' | 'IGNORE_AND_SKIP' | 'RESUME_FROM_CHECKPOINT' | 'HALT_FOR_MANUAL_INTERVENTION';
  readonly associatedRetryPolicy?: RetryPolicy;
  readonly associatedRollbackPlan?: RollbackPlan;
  readonly targetCheckpointIdToResumeFrom?: string;
  readonly notesText: string;
}

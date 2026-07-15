import { GoalPriority } from './goal-priority.js';
import { SuccessCriteria } from './success-criteria.js';

export interface Goal {
  readonly goalId: string;
  readonly parentGoalId?: string; // Supports hierarchical nested sub-goals decomposition
  readonly title: string;
  readonly description: string;
  readonly priority: GoalPriority;
  readonly criteria: SuccessCriteria[];
  readonly status: 'PENDING' | 'EXECUTING' | 'SUCCEEDED' | 'FAILED' | 'ABANDONED';
  readonly assignedAt: Date;
  readonly targetCompletionDate?: Date;
}

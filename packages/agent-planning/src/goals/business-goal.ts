import { GoalPriority } from './goal-priority.js';

export interface BusinessGoal {
  readonly goalId: string;
  readonly tenantId: string;
  readonly title: string;
  readonly description: string;
  readonly priority: GoalPriority;
  readonly constraintsList: string[]; // Set of core regulatory constraints
  readonly successCriteriaList: string[]; // Expected outcomes for verification
  readonly targetedCompletionDate: Date;
  readonly createdAt: Date;
}

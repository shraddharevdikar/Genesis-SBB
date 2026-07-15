import { PlanId } from '../identity/plan-id.js';
import { ExecutionPhase } from './execution-phase.js';
import { DecisionBranch } from './decision-branch.js';

export interface ExecutionPlan {
  readonly planId: PlanId;
  readonly tenantId: string;
  readonly businessGoalId: string;
  readonly title: string;
  readonly phasesList: ExecutionPhase[];
  readonly branchingDecisionsList: DecisionBranch[];
  readonly estimatedTotalDurationMinutes: number;
  readonly estimatedCostChf: number;
  readonly versionNumber: number;
  readonly createdAt: Date;
}

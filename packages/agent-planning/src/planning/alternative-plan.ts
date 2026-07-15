import { ExecutionPlan } from './execution-plan.js';

export interface AlternativePlan {
  readonly alternativeId: string;
  readonly basePlanId: string;
  readonly specificPlanOption: ExecutionPlan;
  readonly tradeOffsDescription: string; // Explains benefits or risks (e.g. "Faster but costs 20% more")
  readonly selectionScore: number; // Quantitative optimization score (0.0 - 1.0)
}

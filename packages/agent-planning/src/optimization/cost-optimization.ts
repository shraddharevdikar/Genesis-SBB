export interface CostOptimization {
  readonly optimizationId: string;
  readonly targetPlanId: string;
  readonly previousCostChf: number;
  readonly optimizedCostChf: number;
  readonly totalSavedChf: number;
  readonly optimizationHeuristicName: string; // e.g. "LEAST_COST_SKILLS_RESOLVER"
  readonly optimizedAt: Date;
}

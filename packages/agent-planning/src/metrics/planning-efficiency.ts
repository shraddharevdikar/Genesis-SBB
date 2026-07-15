import { PlanningId } from '../identity/planning-id.js';

export interface PlanningEfficiency {
  readonly efficiencyId: string;
  readonly tenantId: string;
  readonly planningId: PlanningId;
  readonly planGenerationDurationMs: number; // Time elapsed to analyze and generate alternative options
  readonly totalRevisionsCount: number; // Number of back-and-forth reviews before approval
  readonly costOptimizationPercentage: number; // Percentage cost saved by resource optimization
  readonly calculatedAt: Date;
}

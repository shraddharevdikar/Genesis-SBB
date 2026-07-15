import { PlanningId } from '../identity/planning-id.js';

export interface PlanningQuality {
  readonly qualityId: string;
  readonly tenantId: string;
  readonly planningId: PlanningId;
  readonly goalCoverageRatio: number; // Percentage of success criteria explicitly verified by plan steps (0.0 - 1.0)
  readonly riskMitigationCoverageRatio: number; // Percentage of identified risks having an active mitigation (0.0 - 1.0)
  readonly planningAccuracyScore: number; // Combined planning confidence (0.0 - 1.0)
  readonly calculatedAt: Date;
}

import { MitigationStrategy } from './mitigation-strategy.js';
import { ContingencyPlan } from './contingency-plan.js';

export interface RiskAssessment {
  readonly assessmentId: string;
  readonly targetPlanId: string;
  readonly identifiedRiskDescription: string;
  readonly probabilityScore: number; // 0.0 - 1.0 (highly likely)
  readonly impactScore: number; // 0.0 - 1.0 (catastrophic)
  readonly severityScore: number; // probabilityScore * impactScore
  readonly activeMitigation: MitigationStrategy;
  readonly contingency: ContingencyPlan;
  readonly assessedAt: Date;
}

import { MitigationPlan } from './mitigation-plan.js';

export type RiskCategory = 'BUSINESS' | 'FINANCIAL' | 'OPERATIONAL' | 'TECHNICAL' | 'LEGAL';

export interface AssessedRisk {
  readonly id: string;
  readonly category: RiskCategory;
  readonly description: string;
  readonly probability: number; // 1 to 5 scale
  readonly severity: number;    // 1 to 5 scale
  readonly currentMitigationPlans: MitigationPlan[];
}

export interface RiskAssessment {
  readonly assessmentId: string;
  readonly optionId: string;
  readonly risks: AssessedRisk[];
  readonly totalWeightedRiskScore: number;
}

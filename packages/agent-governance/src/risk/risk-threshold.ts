import { RiskClassificationCategory } from './risk-classification.js';

export interface RiskThreshold {
  readonly thresholdId: string;
  readonly tenantId: string;
  readonly category: RiskClassificationCategory;
  readonly maxAllowedLikelihoodScore: number; // 0.0 to 1.0 (highly likely)
  readonly maxAllowedImpactScore: number; // 0.0 to 1.0 (highly impactful)
  readonly requiresFourEyesVerification: boolean; // Overrides autonomy to semi if violated
  readonly recommendationMitigationNotes: string;
}

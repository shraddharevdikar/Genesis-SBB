import { RiskClassification } from './risk-classification.js';

export interface RiskProfile {
  readonly profileId: string;
  readonly targetResourceId: string; // references plan, step, or action
  readonly detectedRisksList: RiskClassification[];
  readonly aggregateRiskScore: number; // 0.0 - 1.0 (highly risky)
  readonly isPassingAcceptableThresholds: boolean;
  readonly generatedAt: Date;
}

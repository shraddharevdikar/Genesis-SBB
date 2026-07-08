import { ConfidenceModel } from '../confidence/confidence-model.js';
import { RiskAssessment } from '../risk/risk-assessment.js';

export interface Recommendation {
  readonly recommendationId: string;
  readonly preferredOptionId: string;
  readonly rationale: string;
  readonly confidence: ConfidenceModel;
  readonly associatedRiskAssessment: RiskAssessment;
  readonly criticalFollowUpActions: string[];
}

export type RiskClassificationCategory =
  | 'FINANCIAL_LOSS'
  | 'REGULATORY_BREACH'
  | 'OPERATIONAL_SAFETY_HAZARD'
  | 'DATA_PRIVACY_EXPOSURE'
  | 'SBB_REPUTATIONAL_DAMAGE';

export interface RiskClassification {
  readonly category: RiskClassificationCategory;
  readonly severityTier: 'NEGLEGIBLE' | 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL_HAZARD';
  readonly description: string;
}

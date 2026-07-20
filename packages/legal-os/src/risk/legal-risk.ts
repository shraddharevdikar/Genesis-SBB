export interface LegalRisk {
  readonly riskId: string;
  readonly uniqueRiskCode: string; // e.g. "RSK-LEG-IP-INFRINGEMENT"
  readonly riskTitleString: string;
  readonly descriptionText: string;
  readonly estimatedProbabilityRatio: number; // e.g. 0.15 for 15% probability
  readonly estimatedFinancialImpactAmount: number;
  readonly currencyCode: string;
  readonly riskScoreNumeric: number; // probability * impact
  readonly mitigationStrategyNotes: string;
  readonly isTriggeredFlag: boolean;
  readonly activeFlag: boolean;
  readonly createdAt: Date;
}

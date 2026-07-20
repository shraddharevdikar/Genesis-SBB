export interface OperationalRisk {
  readonly riskId: string;
  readonly uniqueRiskCode: string; // e.g. "RSK-OPS-FIBER-CUT"
  readonly riskTitleString: string;
  readonly riskDescriptionText: string;
  readonly severityScoreNumeric: number; // e.g. 1 (negligible) to 5 (catastrophic)
  readonly probabilityScoreNumeric: number; // e.g. 1 (rare) to 5 (almost certain)
  readonly aggregateRiskScore: number; // severity * probability (e.g. up to 25)
  readonly dynamicMitigationPlanText: string;
  readonly isTriggeredFlag: boolean;
  readonly resolvedFlag: boolean;
  readonly createdAt: Date;
}

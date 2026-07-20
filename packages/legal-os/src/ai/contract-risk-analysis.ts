export interface ContractRiskFinding {
  readonly clauseTitleString: string;
  readonly measuredRiskSeverity: 'LOW' | 'MEDIUM' | 'HIGH';
  readonly riskExplanationText: string;
  readonly proposedAmendmentText: string;
}

export interface ContractRiskAnalysis {
  readonly analysisId: string;
  readonly uniqueAnalysisCode: string; // e.g. "ANL-CON-NDA-2026-04"
  readonly associatedContractIdString: string;
  readonly overallRiskScoreNumeric: number; // e.g. 1 to 100
  readonly criticalFindingsList: ContractRiskFinding[];
  readonly standardDeviationScoreDecimal: number;
  readonly automatedPassFlag: boolean;
  readonly calculatedAt: Date;
}

export interface InitiativePrioritizationCriteria {
  readonly strategicAlignmentWeightScore: number; // e.g. 1 to 10
  readonly financialReturnValueScore: number; // e.g. 1 to 10
  readonly implementationEaseScore: number; // e.g. 1 to 10
  readonly operationalRiskReductionScore: number; // e.g. 1 to 10
}

export interface InitiativePrioritization {
  readonly prioritizationId: string;
  readonly uniquePrioritizationCode: string; // e.g. "PRI-2026-INITIATIVES"
  readonly associatedInitiativeIdString: string;
  readonly evaluatedByRoleIdString: string;
  readonly criteriaScores: InitiativePrioritizationCriteria;
  readonly compositeWeightedScoreDecimal: number; // aggregated weighted score
  readonly prioritizationRank: number; // e.g. Rank #3 out of 15
  readonly approvedForExecutionFlag: boolean;
  readonly evaluatedAt: Date;
}

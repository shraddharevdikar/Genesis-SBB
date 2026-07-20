export interface ExecutiveRecommendation {
  readonly recommendationId: string;
  readonly uniqueRecommendationCode: string; // e.g. "REC-EXE-PORTFOLIO-BALANCING"
  readonly summaryTitle: string;
  readonly proposalDetailsText: string;
  readonly expectedROIPercentageDecimal?: number; // e.g. 0.18
  readonly estimatedExecutionCostAmount?: number;
  readonly currencyCode?: string;
  readonly primaryStakeholderRoleIdsList: string[]; // roles that need to sign off
  readonly status: 'PENDING_REVIEW' | 'ACCEPTED_COMMITTED' | 'REJECTED_DISMISSED';
  readonly lastModifiedAt: Date;
}

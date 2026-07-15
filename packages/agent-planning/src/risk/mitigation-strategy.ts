export interface MitigationStrategy {
  readonly strategyId: string;
  readonly description: string;
  readonly expectedRiskReductionScore: number; // Estimated reduction delta (0.0 to 1.0)
  readonly complianceRequirementsMet: boolean;
  readonly costImplicationsChf: number;
}

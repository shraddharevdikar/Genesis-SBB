export interface MitigationPlan {
  readonly mitigationId: string;
  readonly stepDescription: string;
  readonly estimatedMitigationCostUSD?: number;
  readonly residualRiskScore?: number; // 1-10 scale after mitigation
}

export interface OperationalMitigation {
  readonly mitigationId: string;
  readonly description: string;
  readonly budgetAllocatedUSD: number;
  readonly estimatedRiskReductionPercent: number; // e.g. 70
}

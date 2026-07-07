export interface CostPolicy {
  readonly maxBudgetUSD?: number;
  readonly enforceHardLimit: boolean;
  readonly alertThresholdPercent?: number;
  readonly maxPricePerMillionTokens?: {
    readonly input: number;
    readonly output: number;
  };
}

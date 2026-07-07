export interface TokenUsage {
  readonly promptTokens: number;
  readonly completionTokens: number;
  readonly totalTokens: number;
}

export interface CostEstimate {
  readonly inputCost: number;
  readonly outputCost: number;
  readonly totalCost: number;
  readonly currency: string;
}

export interface CostEstimate {
  readonly inputCost: number;
  readonly outputCost: number;
  readonly totalCost: number;
  readonly currency: string;
  readonly confidence: number; // 0.0 to 1.0
}

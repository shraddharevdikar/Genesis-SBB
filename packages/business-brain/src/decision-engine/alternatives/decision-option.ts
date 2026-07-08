export interface DecisionOption {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly benefits: string[];
  readonly risks: string[];
  readonly costUSD: number;
  readonly timeDays: number;
  readonly strategicAlignmentScore: number; // Scale of 1 to 100
}

export interface PrioritizationWeights {
  readonly businessImpactWeight: number;      // e.g. 0.3
  readonly strategicAlignmentWeight: number;  // e.g. 0.3
  readonly costWeight: number;                // e.g. 0.1 (usually negative impact)
  readonly riskWeight: number;                // e.g. 0.1 (usually negative impact)
  readonly timeToValueWeight: number;         // e.g. 0.2
}

export interface PriorityFramework {
  readonly frameworkId: string;
  readonly name: string;
  readonly description: string;
  readonly weights: PrioritizationWeights;
  readonly minScoreThreshold: number;
}

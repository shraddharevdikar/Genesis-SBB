export interface VectorScore {
  readonly value: number; // 0 to 100
  readonly weight: number; // 0.0 to 1.0 (all weights sum to 1.0)
  readonly description?: string;
}

export interface BusinessHealthIndex {
  readonly overallScore: number; // Weighted composite of all metrics (0 to 100)
  readonly ratingBand: 'EXCELLENT' | 'STABLE' | 'WARNING' | 'CRITICAL';
  readonly dimensions: {
    readonly financial: VectorScore;
    readonly customer: VectorScore;
    readonly operational: VectorScore;
    readonly technology: VectorScore;
    readonly workforce: VectorScore;
    readonly strategy: VectorScore;
    readonly risk: VectorScore;
  };
}

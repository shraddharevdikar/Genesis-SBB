export interface ResourceOptimization {
  readonly optimizationId: string;
  readonly targetPlanId: string;
  readonly participantLoadFactorThreshold: number; // Max load percentage per agent (e.g. 0.8)
  readonly bottleneckResourcesList: string[]; // List of over-allocated resources
  readonly allocationAdjustmentSummary: string;
  readonly isOptimized: boolean;
  readonly optimizedAt: Date;
}

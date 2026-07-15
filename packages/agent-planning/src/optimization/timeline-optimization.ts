export interface TimelineOptimization {
  readonly optimizationId: string;
  readonly targetPlanId: string;
  readonly criticalPathStepIdsList: string[]; // Steps on the critical path
  readonly optimizedDurationMinutes: number;
  readonly previousDurationMinutes: number;
  readonly totalTimelineCompressionRatio: number; // Duration saved percentage
  readonly optimizedAt: Date;
}

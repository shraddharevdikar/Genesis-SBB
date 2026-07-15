export interface LearningEffectiveness {
  readonly metricId: string;
  readonly tenantId: string;
  readonly targetAgentId?: string; // Optional filter to evaluate a single digital employee
  readonly patternReuseCount: number; // Count of times reusable patterns were integrated into subsequent plans
  readonly performanceDeltaPercent: number; // Positive/negative duration efficiency shift of tuned tasks
  readonly failureRecurrenceCount: number; // Re-occurrences of failures where lessons learned were already established
  readonly effectivenessScore: number; // Calculated ratio (0.0 to 1.0)
  readonly computedAt: Date;
}

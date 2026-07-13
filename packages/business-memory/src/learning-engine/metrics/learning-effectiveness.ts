export interface LearningEffectiveness {
  readonly effectivenessId: string;
  readonly tenantId: string;
  readonly knowledgeReuseRatePercent: number;
  readonly patternAccuracyPercent: number;
  readonly averageReflectiveTurnaroundDays: number;
  readonly measuredAt: Date;
}

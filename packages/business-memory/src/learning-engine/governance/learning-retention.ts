export interface LearningRetention {
  readonly retentionId: string;
  readonly tenantId: string;
  readonly genericRetentionYears: number;
  readonly sensitiveRetentionYears: number;
  readonly autoPurgeStalePatternsEnabled: boolean;
  readonly stalePatternThresholdDays: number;
}

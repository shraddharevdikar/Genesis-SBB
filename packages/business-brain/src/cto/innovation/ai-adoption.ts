export interface AIAdoptionTask {
  readonly taskId: string;
  readonly modelName: string; // e.g., "Gemini 2.5 Flash", "Gemini 2.5 Pro"
  readonly useCase: string; // e.g., "Advisory Drafting Engine"
  readonly safetyReviewPassed: boolean;
  readonly isMultiTenantSafe: boolean;
  readonly averageLatencyMs: number;
  readonly tokenUtilizationCostUSD: number;
  readonly deploymentState: 'EXPLORING' | 'SANDBOX' | 'STAGING' | 'PRODUCTION' | 'FAILED';
}

export interface AIAdoptionReport {
  readonly reportId: string;
  readonly tenantId: string;
  readonly tasks: AIAdoptionTask[];
  readonly totalActiveModelsCount: number;
  readonly regulatoryStandardAlignmentPercent: number; // 0 to 100
  readonly compiledAt: Date;
}

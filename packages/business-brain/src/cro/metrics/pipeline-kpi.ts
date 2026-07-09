export interface PipelineKPI {
  readonly kpiId: string;
  readonly tenantId: string;
  readonly period: string;
  readonly totalPipelineUSD: number;
  readonly weightedPipelineUSD: number;
  readonly pipelineCoverageRatio: number; // e.g. 3.5 (Pipeline / Target Quota)
  readonly openOpportunitiesCount: number;
  readonly pipelineRiskScore: number; // 0 (no risk) to 100 (extreme risk)
  readonly updatedBy: string;
  readonly updatedAt: Date;
}

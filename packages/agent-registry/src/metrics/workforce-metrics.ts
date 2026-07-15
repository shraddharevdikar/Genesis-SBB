export interface WorkforceMetrics {
  readonly metricsId: string;
  readonly tenantId: string;
  readonly totalRegisteredAgentsCount: number;
  readonly activeAgentsCount: number;
  readonly suspendedAgentsCount: number;
  readonly retiredAgentsCount: number;
  readonly countByDepartmentId: Record<string, number>;
  readonly countByCategory: Record<string, number>;
  readonly countByCertificationLevel: Record<string, number>;
  readonly lastCalculatedAt: Date;
}

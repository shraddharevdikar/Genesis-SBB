export interface ComplianceMetrics {
  readonly metricId: string;
  readonly tenantId: string;
  readonly frameworkId: string; // Map to compliance framework
  readonly overallCompliancePercent: number; // 0.0 - 100.0
  readonly openNonConformancesCount: number;
  readonly criticalAuditWarningsCount: number;
  readonly lastAuditPassed: boolean;
  readonly computedAt: Date;
}

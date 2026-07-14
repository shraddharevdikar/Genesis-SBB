export interface ComplianceMetrics {
  readonly metricsId: string;
  readonly tenantId: string;
  readonly auditedOperationsCount: number;
  readonly accessViolationsCount: number;
  readonly privacyMaskingSuccessRate: number; // e.g., 1.0 (100% compliant fields masked)
  readonly dataRetentionBreachesCount: number;
  readonly doubleApprovalBreachesCount: number;
  readonly recordedAt: Date;
}

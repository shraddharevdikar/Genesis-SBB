export type SlaComplianceState = 'COMPLIANT' | 'WARNING' | 'BREACHED';

export interface SlaStatus {
  readonly slaStatusId: string;
  readonly slaDefinitionId: string;
  readonly tenantId: string;
  readonly complianceState: SlaComplianceState;
  readonly currentMetricValue: number;
  readonly samplesAnalyzedCount: number;
  readonly isBreached: boolean;
  readonly lastEvaluatedAt: Date;
}

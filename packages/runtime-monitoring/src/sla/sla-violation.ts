export interface SlaViolation {
  readonly violationId: string;
  readonly slaDefinitionId: string;
  readonly tenantId: string;
  readonly actualMetricValue: number;
  readonly thresholdBreached: number;
  readonly contextPayloadSnapshot: Record<string, any>;
  readonly isAcknowledged: boolean;
  readonly escalatedToRoleId: string;
  readonly escalationStatus: 'NONE' | 'NOTIFIED' | 'INVESTIGATING' | 'MITIGATED';
  readonly violatedAt: Date;
}

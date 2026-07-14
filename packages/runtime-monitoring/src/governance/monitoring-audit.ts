export interface MonitoringAudit {
  readonly auditId: string;
  readonly tenantId: string;
  readonly operationType: 'SESSION_STARTED' | 'SESSION_PAUSED' | 'ALERT_TRIGGERED' | 'ALERT_ACKNOWLEDGED' | 'ALERT_RESOLVED' | 'SLA_BREACHED' | 'POLICY_MUTATED';
  readonly triggeredByRoleId: string;
  readonly resourceIdentifier: string; // ID of the target resource (e.g. alertId, sessionId)
  readonly changeSnapshotSummary: string; // description of the action
  readonly clientIp?: string;
  readonly timestamp: Date;
}

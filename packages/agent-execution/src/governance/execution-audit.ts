export interface ExecutionAudit {
  readonly auditId: string;
  readonly tenantId: string;
  readonly executionId: string;
  readonly actionName: 'DISPATCHED' | 'CHECKPOINTED' | 'PAUSED' | 'RETRIED' | 'COMPENSATED' | 'COMPLETED' | 'FAILED';
  readonly performedByParticipantId: string; // Actor who initiated the action (system, supervisor, or worker)
  readonly eventPayloadJson?: string;
  readonly auditLoggedAt: Date;
}

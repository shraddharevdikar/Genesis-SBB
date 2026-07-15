export interface ApiAudit {
  readonly auditId: string;
  readonly tenantId: string;
  readonly requestId: string;
  readonly correlationId: string;
  readonly targetService: string;
  readonly callerUserId: string;
  readonly callerRoleId: string;
  readonly actionStatus: 'ALLOWED' | 'DENIED' | 'ERRORED';
  readonly requestDigestHash: string; // GDPR compliant masked payload trace
  readonly timestamp: Date;
}

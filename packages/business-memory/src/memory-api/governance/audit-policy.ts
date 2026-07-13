export interface AuditPolicy {
  readonly auditPolicyId: string;
  readonly tenantId: string;
  readonly loggingVerbosity: 'MINIMAL' | 'STANDARD' | 'DETAILED';
  readonly signedAuditRequired: boolean;
  readonly complianceFrameworks: string[]; // e.g. SOC2, HIPAA, GDPR
}

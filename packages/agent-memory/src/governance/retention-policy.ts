export interface RetentionPolicy {
  readonly policyId: string;
  readonly tenantId: string;
  readonly categoryScope: 'ORGANIZATIONAL' | 'CUSTOMER' | 'EMPLOYEE' | 'PROJECT' | 'WORKFLOW' | 'DECISION' | 'CONVERSATION';
  readonly maxAgeDaysLimit: number; // e.g. 180 days retention for chats, lifetime for decisions
  readonly actionOnExpiry: 'ANONYMIZE' | 'ARCHIVE_OFFLINE' | 'HARD_DELETE';
  readonly requiresComplianceOfficerDualSignoff: boolean;
  readonly lastModifiedAt: Date;
}

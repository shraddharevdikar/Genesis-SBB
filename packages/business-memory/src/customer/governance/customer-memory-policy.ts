export type SharingClearanceLevel = 'PUBLIC_INTERNAL' | 'TEAM_RESTRICTED' | 'EXECUTIVE_COUNCIL_ONLY' | 'NDA_STRICT';

export interface CustomerMemoryPolicy {
  readonly policyId: string;
  readonly tenantId: string;
  readonly customerOrganizationId: string;
  readonly dataPrivacyRegime: 'GDPR' | 'HIPAA' | 'CCPA' | 'SOC2_CONFIDENTIAL' | 'STANDARD_COMMERCIAL';
  readonly sharingClearance: SharingClearanceLevel;
  readonly allowedTeamIds: string[]; // empty if PUBLIC_INTERNAL
  readonly complianceOwnerRoleId: string; // internal SBB role
  readonly isMaskingSensitivePII: boolean;
  readonly lastAuditDate?: Date;
}

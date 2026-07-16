import { BusinessPolicyReference } from './business-policy-reference.js';

export interface GovernanceProfile {
  readonly profileId: string;
  readonly targetOrganizationalUnitId: string; // can be businessId, divisionId, or departmentId
  readonly activePolicyReferencesList: BusinessPolicyReference[];
  readonly complianceAuditIntervalDays: number;
  readonly enforceSovereignDataIsolation: boolean;
  readonly lastAuditPassed: boolean;
  readonly lastAuditedAt?: Date;
}

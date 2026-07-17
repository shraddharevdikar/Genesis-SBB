import { BusinessPolicyReference } from '@sbb/business-foundation';
import { ObjectiveId } from '../identity/objective-id.js';

export interface MeasurementPolicy {
  readonly policyId: string;
  readonly targetObjectiveId?: ObjectiveId;
  readonly basePolicyRef: BusinessPolicyReference;
  readonly targetApprovalAuthorityRoleIdString: string; // e.g. "ROLE-CFO"
  readonly allowAutomaticPolicyOverrides: boolean;
  readonly auditLoggingServerUrlText?: string;
}

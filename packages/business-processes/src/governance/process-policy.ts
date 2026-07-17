import { BusinessPolicyReference } from '@sbb/business-foundation';

export interface ProcessPolicy {
  readonly processPolicyId: string;
  readonly basePolicyRef: BusinessPolicyReference;
  readonly enforcementScopeUnitCode: string; // e.g. "ALL_SUB_STAGES", "BILLING_ONLY"
  readonly alertOwnerRoleTitleCode?: string;
  readonly maximumAutomaticBypassesAllowedCount: number;
}

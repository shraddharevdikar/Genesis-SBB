import { BusinessPolicyReference } from '@sbb/business-foundation';

export interface OrganizationPolicy {
  readonly organizationPolicyId: string;
  readonly basePolicyRef: BusinessPolicyReference;
  readonly targetUnitScopeId: string; // e.g. holdingCompanyId, legalEntityId or businessUnitId
  readonly complianceOfficerParticipantId: string;
  readonly absoluteFinancialSpendingLimitChf: number;
}

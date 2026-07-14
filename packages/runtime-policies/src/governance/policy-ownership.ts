import { PolicyId } from '../identity/policy-id.js';

export interface PolicyOwnership {
  readonly ownershipId: string;
  readonly policyId: PolicyId;
  readonly businessOwnerRoleId: string; // The role managing the business rule definitions
  readonly technicalContactEmail: string;
  readonly organizationUnitName: string;
  readonly approvalRequiredForModifications: boolean;
  readonly authorizedApproverRoleIds: string[];
}

import { PolicyId } from '../identity/policy-id.js';
import { PolicyOwnership } from './policy-ownership.js';
import { PolicyAudit } from './policy-audit.js';

export interface PolicyGovernance {
  /**
   * Asserts and assigns ownership controls for a specific business rule definition.
   */
  assignOwnership(
    tenantId: string,
    policyId: PolicyId,
    ownership: Omit<PolicyOwnership, 'ownershipId' | 'policyId'>
  ): Promise<PolicyOwnership>;

  /**
   * Records a compliance or audit entry on the immutable system log.
   */
  logAuditEntry(
    tenantId: string,
    entry: Omit<PolicyAudit, 'auditId' | 'timestamp'>
  ): Promise<PolicyAudit>;

  /**
   * Asserts if the given modifier role meets approval prerequisites.
   */
  checkApprovalAuthority(
    tenantId: string,
    policyId: PolicyId,
    modifierRoleId: string
  ): Promise<{ isAuthorized: boolean; missingApproverRoles: string[] }>;
}

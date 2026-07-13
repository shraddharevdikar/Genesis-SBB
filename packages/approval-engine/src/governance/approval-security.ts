import { ApprovalInstanceId } from '../identity/approval-instance-id.js';

export interface ApprovalSecurity {
  /**
   * Asserts if an identity matches the expected clearance or belongs to the authorized group/role.
   */
  assertClearance(
    tenantId: string,
    roleId: string,
    requiredLevel: 'PUBLIC' | 'RESTRICTED' | 'CONFIDENTIAL' | 'SECRET'
  ): Promise<boolean>;

  /**
   * Validates structural tenant boundaries.
   */
  validateTenantAccess(
    tenantId: string,
    instanceId: ApprovalInstanceId
  ): Promise<boolean>;

  /**
   * Cryptographically signs or verifies decisions.
   */
  verifySignature(
    payload: Record<string, any>,
    signatureHash: string,
    publicKey: string
  ): boolean;
}

import { PolicyVersion } from '../core/policy-version.js';

export interface PolicyApproval {
  readonly approvalId: string;
  readonly policyIdString: string;
  readonly targetedVersion: PolicyVersion;
  readonly approvedByOperatorRoleId: string;
  readonly boardResolutionNotesText?: string;
  readonly securityCouncilCertifiedFlag: boolean;
  readonly approvedAt: Date;
}

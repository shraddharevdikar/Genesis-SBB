import { LegalApprovalState } from '../core/legal-lifecycle.js';

export interface LegalApproval {
  readonly approvalId: string;
  readonly uniqueApprovalCode: string; // e.g. "APV-CON-2026-0042"
  readonly targetEntityIdString: string; // The contract, board resolution, or policy being approved
  readonly associatedWorkflowIdString?: string;
  readonly requesterRoleIdString: string;
  readonly currentState: LegalApprovalState;
  readonly autoApprovedFlag: boolean;
  readonly startedAt: Date;
  readonly completedAt?: Date;
}

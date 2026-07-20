import { LegalApprovalState } from '../core/legal-lifecycle.js';

export interface ApprovalStage {
  readonly stageId: string;
  readonly uniqueStageCode: string; // e.g. "STG-LEG-COUNSEL-01"
  readonly associatedApprovalIdString: string;
  readonly sequenceNumber: number; // e.g. 1, 2, 3
  readonly requiredOperatorRoleIdString: string; // e.g. "GENERAL_COUNSEL"
  readonly stageState: LegalApprovalState;
  readonly completionDeadlineDate?: Date;
  readonly completedAt?: Date;
}

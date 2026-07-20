export interface CorrectiveAction {
  readonly actionId: string;
  readonly uniqueActionCode: string; // e.g. "CAPA-2026-0042"
  readonly associatedInspectionIdString: string;
  readonly rootCauseAnalysisText: string;
  readonly correctiveActionPlanText: string;
  readonly assigneeRoleIdString: string;
  readonly targetCompletionDate: Date;
  readonly completedDate?: Date;
  readonly resolvedFlag: boolean;
  readonly approvedByOperatorRoleId?: string;
  readonly createdAt: Date;
}

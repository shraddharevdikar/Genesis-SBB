export interface LegalCorrectiveAction {
  readonly actionId: string;
  readonly uniqueActionCode: string; // e.g. "CAPA-LEG-2026-10"
  readonly associatedFindingIdString: string;
  readonly rootCauseDescriptionText: string;
  readonly correctiveActionPlanText: string;
  readonly assigneeRoleIdString: string;
  readonly targetCompletionDate: Date;
  readonly completedDate?: Date;
  readonly resolvedFlag: boolean;
  readonly approvedByLegalRoleIdString?: string;
  readonly createdAt: Date;
}

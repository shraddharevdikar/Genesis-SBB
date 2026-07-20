export interface CorrectiveActionPlan {
  readonly actionId: string;
  readonly uniqueActionCode: string; // e.g. "CAPA-2026-STAMP-02"
  readonly associatedNonConformanceLogIdString: string;
  readonly rootCauseAnalysisSummary: string; // e.g. "Machine 02 stamp head misaligned due to worn guide rails"
  readonly correctiveActionDescriptionText: string;
  readonly preventiveActionDescriptionText: string;
  readonly assignedOwnerStaffRoleIdString: string; // Links to HROS / Role
  readonly targetCompletionDate: Date;
  readonly completionDate?: Date;
  readonly effectivenessVerifiedAt?: Date;
  readonly status: 'DRAFT_PROPOSED' | 'ACTIVE_IMPLEMENTATION' | 'EFFECTIVENESS_VERIFIED' | 'CANCELLED';
  readonly lastModifiedAt: Date;
}

export interface LearningAudit {
  readonly auditId: string;
  readonly tenantId: string;
  readonly targetLearningSessionId: string;
  readonly actionName: 'SESSION_INITIALIZED' | 'OUTCOME_EVALUATED' | 'IMPROVEMENT_PROPOSED' | 'VALIDATED_SAFE' | 'HUMAN_APPROVED' | 'INTEGRATED_TO_SYSTEM' | 'REJECTED_COMPLIANCE';
  readonly performedByParticipantId: string; // Actor who executed the transition
  readonly previousStateSnapshotJson?: string;
  readonly updatedStateSnapshotJson?: string;
  readonly auditLoggedAt: Date;
}

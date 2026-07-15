export interface ApprovalForLearning {
  readonly approvalId: string;
  readonly tenantId: string;
  readonly targetLearningSessionId: string;
  readonly authorizedSupervisorParticipantId: string;
  readonly signOffDecisionCode: 'GRANTED' | 'DENIED' | 'REQUIRES_RECONSTRUCTION';
  readonly feedbackCommentaryText?: string;
  readonly timestamp: Date;
}

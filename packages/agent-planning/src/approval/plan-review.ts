export interface PlanReview {
  readonly reviewId: string;
  readonly targetPlanId: string;
  readonly reviewerParticipantId: string; // supervisor, lead agent, compliance officer
  readonly isApproved: boolean;
  readonly revisionFeedbackText?: string; // Optional feedback on rejection
  readonly reviewedAt: Date;
}

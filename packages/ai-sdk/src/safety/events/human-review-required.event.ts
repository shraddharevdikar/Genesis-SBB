export interface HumanReviewRequiredEvent {
  readonly eventType: 'moderation.human_review_required';
  readonly timestamp: Date;
  readonly contentId: string;
  readonly triggerReason: string;
  readonly escalationLevel: string;
  readonly potentialCategories: string[];
}

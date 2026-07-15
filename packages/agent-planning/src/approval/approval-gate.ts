import { PlanReview } from './plan-review.js';

export interface ApprovalGate {
  readonly gateId: string;
  readonly targetPlanId: string;
  readonly gateName: string; // e.g., "SBB_SAFETY_REVIEW_GATE"
  readonly requiredReviewsCount: number;
  readonly activeReviewsList: PlanReview[];
  readonly isPassed: boolean;
  readonly passedAt?: Date;
}

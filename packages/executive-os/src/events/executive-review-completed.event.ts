import { ExecutiveReview } from '../performance/executive-review.js';
import { ExecutiveContext } from '../core/executive-context.js';

export interface ExecutiveReviewCompletedEvent {
  readonly eventId: string;
  readonly eventName: 'EXECUTIVE_REVIEW_COMPLETED';
  readonly payload: {
    readonly review: ExecutiveReview;
  };
  readonly context: ExecutiveContext;
}

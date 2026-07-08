import { FeedbackRating } from './feedback-rating.js';

export interface UserFeedback {
  readonly feedbackId: string;
  readonly rating: FeedbackRating;
  readonly score?: number;
  readonly comments?: string;
  readonly userId: string;
  readonly timestamp: Date;
}

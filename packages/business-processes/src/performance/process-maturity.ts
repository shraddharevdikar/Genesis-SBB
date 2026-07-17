import { MaturityModel } from '@sbb/business-foundation';

export interface ProcessMaturity {
  readonly maturityRatingId: string;
  readonly baseMaturityRef: MaturityModel;
  readonly supportsAutonomousDecisionOptimization: boolean;
  readonly nextOptimizingSprintReviewAt: Date;
}

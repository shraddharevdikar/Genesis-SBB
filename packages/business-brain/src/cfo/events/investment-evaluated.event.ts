import { InvestmentRecommendation } from '../advisory/financial-recommendation.js';

export interface InvestmentEvaluatedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly recommendation: InvestmentRecommendation;
  readonly evaluatedBy: string;
  readonly timestamp: Date;
}

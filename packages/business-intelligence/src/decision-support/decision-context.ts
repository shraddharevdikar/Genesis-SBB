import { DecisionOption } from './decision-option.js';
import { DecisionTradeoff } from './decision-tradeoff.js';

export interface DecisionContext {
  readonly decisionSessionId: string;
  readonly uniqueDecisionCode: string; // e.g. "DSC-FIN-Q3-EXPANSION"
  readonly displayTitleString: string;
  readonly coreProblemStatementText: string;
  readonly associatedRecommendationIdString?: string; // links to business-recommendation
  readonly alternativeOptionsList: DecisionOption[];
  readonly comparativeTradeoffsList: DecisionTradeoff[];
  readonly expectedOutcomesSummaryText: string;
  readonly optimalChoiceRecommendationOptionId?: string;
  readonly isDecisionConcludedFlag: boolean;
  readonly concludedOptionId?: string;
  readonly concludedAt?: Date;
}

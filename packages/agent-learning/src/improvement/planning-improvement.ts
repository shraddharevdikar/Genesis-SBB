import { ImprovementRecommendation } from './improvement-recommendation.js';

export interface PlanningImprovement extends ImprovementRecommendation {
  readonly targetType: 'PLANNING';
  readonly proposedSequenceAdjustmentsJson: string; // Adjust sequence of steps or phases based on actual bottlenecks
  readonly optimizedDurationEstimatesMs: Record<string, number>; // Refined step duration expectations
  readonly addedContingencyTriggerRulesList: string[];
}

import { DecisionCategory } from '../../decision-dna/core/decision-profile.js';

export interface EngineDecisionContext {
  readonly decisionId: string;
  readonly decisionCategory: DecisionCategory;
  readonly isApproved: boolean;
  readonly assumptionsValidatedCount: number;
}

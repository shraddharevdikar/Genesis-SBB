import { BusinessGoal } from './business-goal.js';

export interface ObjectiveAnalysis {
  readonly analysisId: string;
  readonly associatedGoal: BusinessGoal;
  readonly decompositionNotesText: string;
  readonly subObjectivesList: string[]; // Decomposed specific sub-objectives
  readonly isAnalyzedSuccessfully: boolean;
  readonly analyzedAt: Date;
}

export interface FeasibilityAnalysis {
  readonly analysisId: string;
  readonly targetGoalId: string;
  readonly feasibilityScore: number; // 0.0 - 1.0 (highly feasible)
  readonly reasoningText: string;
  readonly lacksRequiredSkillsList: string[]; // List of skills packages missing
  readonly lacksRequiredResourcesList: string[]; // List of platform elements missing
  readonly isFeasible: boolean;
  readonly evaluatedAt: Date;
}

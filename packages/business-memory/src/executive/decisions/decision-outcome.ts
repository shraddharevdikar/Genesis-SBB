export interface DecisionOutcome {
  readonly outcomeId: string;
  readonly isSuccessful: boolean;
  readonly measuredMetrics: Record<string, number>;
  readonly unexpectedConsequences: string[];
  readonly actualVsExpectedDiffSummary: string;
  readonly measuredAt: Date;
}

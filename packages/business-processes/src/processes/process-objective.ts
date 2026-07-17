export interface ProcessObjective {
  readonly objectiveId: string;
  readonly uniqueObjectiveCode: string; // e.g. "OBJ-CUST-RETAIN"
  readonly shortSummaryText: string;
  readonly targetedBusinessOutcomeMarkdownText: string;
  readonly strategicWeightScore: number; // e.g. 1 to 5
}

export interface StrategicObjective {
  readonly objectiveId: string;
  readonly uniqueObjectiveCode: string; // e.g. "REDUCE_OPEX_20"
  readonly shortTitle: string;
  readonly detailedDescriptionText: string;
  readonly targetCompletionDate: Date;
  readonly priorityWeightValue: number; // e.g. 1 to 5
}

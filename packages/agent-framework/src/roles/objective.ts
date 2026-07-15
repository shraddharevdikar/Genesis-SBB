export interface Objective {
  readonly objectiveId: string;
  readonly statement: string;
  readonly targetPercentageComplete: number;
  readonly currentPercentageComplete: number;
}

export type CompetencyScaleCode =
  | 'LEVEL_1_NOVICE'
  | 'LEVEL_2_INTERMEDIATE'
  | 'LEVEL_3_PROFICIENT'
  | 'LEVEL_4_EXPERT'
  | 'LEVEL_5_MASTER';

export interface CompetencyLevel {
  readonly ratingCode: CompetencyScaleCode;
  readonly numericScore: number; // e.g. 1 to 5
  readonly behavioralIndicatorsText: string;
}

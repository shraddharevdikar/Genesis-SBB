export interface CustomerHealthState {
  readonly healthId: string;
  readonly numericalScore: number; // 0 to 100
  readonly band: 'GREEN' | 'YELLOW' | 'RED';
  readonly productAdoptionRate: number; // percentage
  readonly interactionSentimentScore: number; // 0 to 100
  readonly activeChurnSignalsCount: number;
  readonly lastAssessedAt: Date;
}

export interface BestPractice {
  readonly practiceId: string;
  readonly uniqueReferenceCode: string;
  readonly detailedBodyMarkdownText: string;
  readonly performanceImpactScoreRating: number; // e.g. 1 to 5
}

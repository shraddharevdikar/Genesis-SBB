export interface ImpactSummary {
  readonly metricName: string;
  readonly baselineValue: string;
  readonly simulatedValue: string;
  readonly deltaPercentage: number; // e.g. +12.5%
  readonly qualitativeAssessment: string;
  readonly confidenceRating: 'HIGH' | 'MEDIUM' | 'LOW';
}

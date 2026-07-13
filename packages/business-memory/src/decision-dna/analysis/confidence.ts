export interface ConfidenceRating {
  readonly score: number;
  readonly description?: string;
  readonly primaryRiskFactors: string[];
  readonly analysisCoveragePercent: number;
}

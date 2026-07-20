export interface IntelligenceQuality {
  readonly qualityId: string;
  readonly targetInsightIdString: string;
  readonly dataCompletenessScoreRatio: number; // e.g. 0.98 (98% complete)
  readonly sourceCredibilityIndexRatio: number; // e.g. 0.95
  readonly historicalModelVariancePercentage: number; // e.g. 2.1% error deviation
  readonly hasOutliersBeenPrunedFlag: boolean;
  readonly lastQualityCheckAt: Date;
}

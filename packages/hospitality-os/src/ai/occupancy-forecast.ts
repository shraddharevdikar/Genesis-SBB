export interface DailyOccupancyForecastLine {
  readonly forecastDate: Date;
  readonly predictedOccupiedRoomsCount: number;
  readonly predictedOccupancyRatePercentage: number; // e.g. 84.5
  readonly baselineConfidenceScoreDecimal: number; // e.g. 0.91
}

export interface OccupancyForecast {
  readonly forecastId: string;
  readonly uniqueForecastCode: string; // e.g., "FST-OCC-2026-Q3-ZUR"
  readonly associatedPropertyIdString: string;
  readonly targetHorizonStartDate: Date;
  readonly targetHorizonEndDate: Date;
  readonly dailyForecastLinesList: DailyOccupancyForecastLine[];
  readonly dominantDemandDriverText: string; // e.g. "Summer Music Festival + Corporate Tech Conference"
  readonly staffSchedulingOptimizedRecommendationJSON?: string; // Housekeeping shift size recommendations
  readonly calculatedAt: Date;
}

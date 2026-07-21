export interface FleetVehicleUtilityMetric {
  readonly vehicleIdString: string;
  readonly uniqueVehicleCodeString: string;
  readonly activeServiceHoursCount: number;
  readonly idleHoursCount: number;
  readonly volumeCapacityUtilizationRatioDecimal: number; // e.g. 0.81 for 81% full
  readonly weightCapacityUtilizationRatioDecimal: number; // e.g. 0.65 for 65% weight
  readonly fuelEfficiencyLitersPer100KmDecimal: number;
}

export interface FleetUtilizationAnalysis {
  readonly analysisId: string;
  readonly uniqueAnalysisCode: string; // e.g., "EXP-FLT-2026-OCT-01"
  readonly targetHorizonStartDate: Date;
  readonly targetHorizonEndDate: Date;
  readonly vehiclesUtilityMetricsList: FleetVehicleUtilityMetric[];
  readonly dominantUnderutilizedAssetNotesText: string; // e.g. "Cold storage refrigerated trucks idle on weekdays"
  readonly recommendedLeasingAdjustmentsJSON?: string;
  readonly calculatedAt: Date;
}

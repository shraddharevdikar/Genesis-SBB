export interface MachineHealthIndicator {
  readonly sensorStreamMetricName: string; // e.g. "Vibration frequency" or "Bearing temperature"
  readonly lastObservedValueDecimal: number;
  readonly deviationMultiplierFromBaselineDecimal: number;
}

export interface PredictiveMaintenanceRecommendation {
  readonly recommendationId: string;
  readonly uniqueRecommendationCode: string; // e.g. "MNT-REC-ROBOT-02"
  readonly targetMachineIdString: string;
  readonly remainingUsefulLifeEstimatedHoursCount: number;
  readonly failureProbabilityDecimal: number; // probability of failure within 7 days, e.g. 0.82 (82%)
  readonly underlyingAnomaliesList: MachineHealthIndicator[];
  readonly recommendedMaintenancePlanIdString: string;
  readonly priorityLevel: 'LOW_ROUTINE' | 'MEDIUM_PREVENTATIVE' | 'HIGH_IMMEDIATE_ACTION';
  readonly rationalBasisText: string;
  readonly calculatedAt: Date;
}

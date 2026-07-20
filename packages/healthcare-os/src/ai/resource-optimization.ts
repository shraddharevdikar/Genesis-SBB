import { ProviderId } from '../providers/healthcare-provider.js';

export interface WardResourcePrediction {
  readonly associatedWardIdString: string;
  readonly predictedAdmissionVolumeCount: number;
  readonly predictedDischargeVolumeCount: number;
  readonly recommendedStaffNurseCount: number;
  readonly highOccupancyBreachProbabilityDecimal: number;
}

export interface ResourceOptimizationForecast {
  readonly forecastId: string;
  readonly uniqueForecastCode: string; // e.g. "RSC-OPT-FAC-ZURICH"
  readonly associatedProviderId: ProviderId;
  readonly focusAreaDescription: string;
  readonly simulatedTimeHorizonDaysCount: number; // e.g. 7 days
  readonly predictedTrendDirection: 'SURGE_EXPECTED' | 'STABLE_STANDARD' | 'LOW_DEMAND';
  readonly wardPredictionsList: WardResourcePrediction[];
  readonly criticalOvercapacityRiskFlag: boolean;
  readonly generatedAt: Date;
}

export interface OptimizedStopSequence {
  readonly stopOrderIndex: number;
  readonly addressString: string;
  readonly anticipatedDriveDurationMinutesCount: number;
  readonly transitDistanceKilometersDecimal: number;
  readonly dynamicTrafficDelayBufferMinutesCount: number;
}

export interface RouteOptimization {
  readonly optimizationId: string;
  readonly uniqueOptimizationCode: string; // e.g., "OPT-RTE-ZUR-1015"
  readonly originalRouteIdString: string; // Links to Route
  readonly optimizedStopsSequenceList: OptimizedStopSequence[];
  readonly totalOptimizedDistanceKilometersDecimal: number;
  readonly totalDistanceSavedKilometersDecimal: number;
  readonly totalEstimatedTimeSavedMinutesCount: number;
  readonly routeRationaleExplanationText: string; // e.g. "Avoided highway roadworks construction and staged sequential residential drops first"
  readonly systemApprovedAutopilotFlag: boolean;
  readonly managerSignOffStaffRoleIdString?: string;
  readonly calculatedAt: Date;
}

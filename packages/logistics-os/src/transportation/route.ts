export interface RouteWaypoint {
  readonly sequenceIndex: number; // e.g. 1st, 2nd, 3rd stop
  readonly facilityIdString?: string; // If registered warehouse/depot
  readonly waypointLabelString: string; // e.g. "Main Street customer pickup"
  readonly physicalAddressString: string;
  readonly geoLatitudeDecimal?: number;
  readonly geoLongitudeDecimal?: number;
  readonly estimatedArrivalTimestamp: Date;
  readonly estimatedDepartureTimestamp: Date;
  readonly completedFlag: boolean;
  readonly actualArrivalTimestamp?: Date;
}

export interface Route {
  readonly routeId: string;
  readonly uniqueRouteCode: string; // e.g. "RTE-ZUR-GEN-102"
  readonly startFacilityIdString: string; // Starting depot/warehouse
  readonly endFacilityIdString: string; // Ending hub
  readonly scheduledWaypointsList: RouteWaypoint[];
  readonly totalDistanceKilometersDecimal: number;
  readonly estimatedTravelDurationMinutesCount: number;
  readonly routingPriorityCode: 'EXPRESS_RUSH' | 'STANDARD' | 'OPTIMIZED_GREEN_PATH';
  readonly pathWaypointsPolylinesJSON?: string; // Polyline geometry coordinates
  readonly activeStatusFlag: boolean;
  readonly lastModifiedAt: Date;
}

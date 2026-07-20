export interface ResourceUtilization {
  readonly utilizationId: string;
  readonly associatedResourceIdString: string;
  readonly scopeStartDate: Date;
  readonly scopeEndDate: Date;
  readonly totalCapacityHoursCount: number;
  readonly actualAllocatedHoursCount: number;
  readonly actualProductiveHoursCount: number;
  readonly measuredUtilizationRatioDecimal: number; // e.g. 0.82 for 82% utilization
  readonly lastCalculatedAt: Date;
}

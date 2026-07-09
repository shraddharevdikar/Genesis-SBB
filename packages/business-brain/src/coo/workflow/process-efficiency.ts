export interface ProcessEfficiency {
  readonly processId: string;
  readonly processName: string;
  readonly averageCycleTimeHours: number;
  readonly throughputUnitsPerDay: number;
  readonly wasteHoursPercent: number; // e.g. 0.15 for 15%
  readonly valueAddRatio: number; // Value-add time / total lead time
}

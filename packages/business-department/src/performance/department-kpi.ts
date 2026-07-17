export interface DepartmentKpi {
  readonly kpiId: string;
  readonly code: string; // e.g. "CUSTOMER_SAT_CS"
  readonly title: string;
  readonly metricMeasurementUnitString: string; // e.g. "PERCENTAGE", "HOURS", "COUNT"
  readonly targetValue: number;
  readonly currentMeasuredValue: number;
  readonly toleranceBufferValue: number;
  readonly lastMeasuredAt: Date;
}

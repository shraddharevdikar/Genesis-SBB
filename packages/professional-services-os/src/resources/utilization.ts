export interface ConsultantUtilizationMetric {
  readonly consultantIdString: string;
  readonly uniqueConsultantCodeString: string;
  readonly totalCapacityHoursCount: number; // Standard working hours e.g. 40 hrs/week
  readonly billableHoursLoggedCount: number; // Hours charged to clients
  readonly nonBillableHoursLoggedCount: number; // Internal meetings, training
  readonly timeOffHoursCount: number; // Vacation, sick leave (HROS)
  readonly calculatedBillableUtilizationPercentageDecimal: number; // billableHours / capacityHours
  readonly deviationFromTargetPercentageDecimal: number; // actual vs target utilization
}

export interface PracticeUtilizationSummary {
  readonly utilizationSummaryId: string;
  readonly uniqueSummaryCode: string; // e.g., "UTL-2026-OCT-CLD"
  readonly practiceAreaCode: string; // e.g. "CLD-ENG"
  readonly monitoringStartDate: Date;
  readonly monitoringEndDate: Date;
  readonly consultantsUtilizationMetricsList: ConsultantUtilizationMetric[];
  readonly averagePracticeUtilizationPercentageDecimal: number;
  readonly underutilizedHeadcountAlertCount: number;
  readonly lastCalculatedAt: Date;
}

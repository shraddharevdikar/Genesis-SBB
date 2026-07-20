export interface MaintenancePlan {
  readonly planId: string;
  readonly uniquePlanCode: string; // e.g. "MNT-PLN-ROBOTIC-ARM"
  readonly targetMachineIdString: string;
  readonly planTitleString: string;
  readonly triggerMetricType: 'TIME_INTERVAL_DAYS' | 'CUMULATIVE_OPERATING_HOURS' | 'PRODUCTION_CYCLES_COUNT';
  readonly triggerThresholdDecimal: number; // e.g. 180 (days) or 1000 (operating hours)
  readonly lastTriggeredValueDecimal: number;
  readonly standardProcedureDescriptionText: string; // e.g. "Replace joint lubrication and recalibrate positional sensors"
  readonly standardDurationMinutesCount: number;
  readonly requiredSparePartProductIdsList: string[]; // Links to spare parts products
  readonly estimatedCostBasisAmount: number;
  readonly currencyCode: string;
  readonly activeFlag: boolean;
  readonly lastReviewedAt: Date;
}

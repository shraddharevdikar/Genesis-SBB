export interface RoleKpi {
  readonly kpiId: string;
  readonly code: string; // e.g. "REV_TARGET_CH"
  readonly title: string;
  readonly descriptionText: string;
  readonly targetThresholdValue: number;
  readonly measuredMetricUnitCode: string; // e.g. "CHF", "RATIO", "COUNT"
}

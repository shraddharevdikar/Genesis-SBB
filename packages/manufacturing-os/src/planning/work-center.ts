export interface WorkCenter {
  readonly workCenterId: string;
  readonly uniqueCenterCode: string; // e.g. "WC-STAMPING-04"
  readonly workCenterDisplayName: string;
  readonly plantLocationCodeText: string; // e.g. "PLANT-ZURICH-EAST"
  readonly standardDailyCapacityHoursDecimal: number; // e.g. 16.0 (two 8hr shifts)
  readonly efficiencyRatePercentageDecimal: number; // e.g. 0.95 (95% efficiency)
  readonly standardHourlyBillingRateAmount: number; // For manufacturing costing
  readonly currencyCode: string;
  readonly totalAssignedOperatorsCount: number;
  readonly activeStatusFlag: boolean;
}

export interface LogisticsKPIs {
  readonly calculationHorizonStartDate: Date;
  readonly calculationHorizonEndDate: Date;
  readonly onTimeInFullPercentDecimal: number; // OTIF ratio, e.g. 0.942
  readonly averageOrderCycleTimeHoursDecimal: number; // Hours from purchase order creation to warehouse receipt
  readonly inventoryAccuracyRateDecimal: number; // e.g. 0.998 for 99.8% bin alignment
  readonly inventoryTurnoverRatioDecimal: number; // COGS / average inventory value
  readonly carryingCostPercentageDecimal: number; // Holding cost e.g. 0.15 for 15%
  readonly averageDockToStockTimeMinutesCount: number; // Minutes from truck arrival to bin stowage
  readonly firstPassYieldQualityRatioDecimal: number; // e.g. 0.992
  readonly shippingCostPerUnitAmount: number;
  readonly electricVehicleLastMileGreenShareDecimal: number; // percentage of deliveries in green transport
}

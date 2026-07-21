export interface SlottingRecommendationRow {
  readonly skuCodeString: string;
  readonly itemDisplayNameString: string;
  readonly currentBinIdString: string;
  readonly proposedBinIdString: string;
  readonly movementVelocityCategory: 'HIGH_FAST_FLOW' | 'MEDIUM_NORMAL_FLOW' | 'LOW_SLOW_MOVING';
  readonly reasonRationaleText: string; // e.g. "Staging high-frequency items close to shipping doors"
}

export interface WarehouseOptimization {
  readonly optimizationId: string;
  readonly uniqueOptimizationCode: string; // e.g. "OPT-WHS-ZUR-SLOT-01"
  readonly associatedWarehouseIdString: string;
  readonly slottingRecommendationsList: SlottingRecommendationRow[];
  readonly totalProjectedInternalWalkTimeSavedHoursCount?: number;
  readonly laborEfficiencyImprovementPercentageDecimal: number; // e.g. 0.125 for 12.5%
  readonly activeStatusFlag: boolean;
  readonly calculatedAt: Date;
}

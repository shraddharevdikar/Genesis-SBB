export interface CostCenter {
  readonly name: string; // e.g. "R&D", "Sales & Marketing", "G&A"
  readonly costYtdUSD: number;
  readonly budgetAllocatedUSD: number;
}

export interface CostState {
  readonly totalOperatingExpensesYtdUSD: number;
  readonly costCenters: CostCenter[];
  readonly costOfGoodsSoldYtdUSD: number;
  readonly customerAcquisitionCostAvgUSD: number;
}

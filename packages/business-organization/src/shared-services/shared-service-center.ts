export interface SharedServiceCenter {
  readonly centerId: string;
  readonly name: string;
  readonly locationAddressText: string;
  readonly chargebackModelCode: 'COST_RECOVERY' | 'TRANSACTION_BASED' | 'FLAT_RATE';
  readonly centralOperatingBudgetChf: number;
  readonly supportedFunctionalCapabilityCodesList: string[];
}

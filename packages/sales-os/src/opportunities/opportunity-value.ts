export interface OpportunityValue {
  readonly valueId: string;
  readonly annualRecurringRevenueAmount: number; // ARR
  readonly oneTimeSetupFeeAmount: number; // NRR
  readonly professionalServicesAmount: number; // Consultation or custom dev
  readonly totalContractValueAmount: number; // TCV = (ARR * Years) + NRR + Professional Services
  readonly contractDurationMonthsCount: number; // e.g. 12, 24, 36
  readonly currencyCode: string; // e.g. "CHF"
  readonly grossMarginPercentageDecimal: number; // e.g. 0.85
}

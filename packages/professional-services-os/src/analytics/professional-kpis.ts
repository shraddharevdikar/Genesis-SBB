export interface ProfessionalKPIs {
  readonly calculationHorizonStartDate: Date;
  readonly calculationHorizonEndDate: Date;
  readonly averageBillableUtilizationPercentageDecimal: number; // e.g. 0.742 for 74.2% across practice
  readonly revenuePerFteRatioAmount: number; // TTM total practice revenue / FTE headcount
  readonly netPracticeMarginPercentageDecimal: number; // Gross revenues - labor/pass-through cost
  readonly daysSalesOutstandingCount: number; // Average days from invoice release to payment (FinanceOS AR link)
  readonly onTimeProjectMilestoneDeliveryPercentageDecimal: number; // Ratio of milestone deadlines met
  readonly clientRetentionRatePercentageDecimal: number; // Year-over-year renewal rate
  readonly averageCustomerHealthScoreDecimal: number; // Composite client csat / health avg
  readonly pipelineCoverageRatioDecimal?: number; // SalesOS proposal pipeline value / targets
}

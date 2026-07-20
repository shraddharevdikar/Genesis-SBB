export interface ExecutiveInvestmentId {
  readonly value: string;
}

export interface EnterpriseInvestment {
  readonly investmentId: ExecutiveInvestmentId;
  readonly uniqueInvestmentCode: string; // e.g. "INV-CAPITAL-EXPANSION"
  readonly displayName: string;
  readonly targetOperatingSystemCode: 'MARKETING_OS' | 'SALES_OS' | 'FINANCE_OS' | 'HR_OS' | 'OPERATIONS_OS' | 'LEGAL_OS';
  readonly capitalExpenditureAmount: number; // CapEx
  readonly operationalExpenditureAmount: number; // OpEx
  readonly currencyCode: string;
  readonly hurdleRateIRRRatioDecimal?: number; // e.g. 0.12 (12% hurdle rate)
  readonly forecastedNPVAmount?: number;
  readonly paybackPeriodMonthsCount?: number;
  readonly approvedByExecutiveRoleIdString: string;
  readonly approvalDecisionIdString: string; // links to governance
  readonly activeFlag: boolean;
  readonly investedAt: Date;
}

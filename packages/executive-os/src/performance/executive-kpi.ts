export interface ExecutiveKPI {
  readonly kpiId: string;
  readonly uniqueKpiCode: string; // e.g. "KPI-EXE-EBITDA-MARGIN"
  readonly displayName: string;
  readonly category: 'FINANCIAL_STABILITY' | 'OPERATIONAL_EXCELLENCE' | 'CUSTOMER_DELIGHT' | 'GROWTH_INNOVATION' | 'COMPLIANCE_GOVERNANCE';
  readonly sourceOperatingSystemCode: 'MARKETING_OS' | 'SALES_OS' | 'FINANCE_OS' | 'HR_OS' | 'OPERATIONS_OS' | 'LEGAL_OS' | 'EXECUTIVE_OS';
  readonly calculatedValueDecimal: number;
  readonly unitOfMeasurementString: string; // e.g. "PERCENT", "CHF", "RATIO"
  readonly targetThresholdValueDecimal: number;
  readonly warningThresholdValueDecimal: number;
  readonly triggerAlertFlag: boolean;
  readonly lastCalculatedAt: Date;
}

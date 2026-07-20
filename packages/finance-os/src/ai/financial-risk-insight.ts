export type FinancialRiskClassificationCode =
  | 'BUDGET_OVERRUN_PROJECTION'
  | 'DUPLICATE_SUPPLIER_INVOICE_PROBABILITY'
  | 'CASH_RUNWAY_ALERT'
  | 'UNEXPECTED_VENDOR_PRICING_SURGE'
  | 'SANCTION_COMPLIANCE_HIT';

export interface FinancialRiskInsight {
  readonly insightId: string;
  readonly uniqueInsightCode: string; // e.g., "INS-RISK-2026-042"
  readonly riskType: FinancialRiskClassificationCode;
  readonly severityLevel: 'INFO' | 'WARNING' | 'HIGH_EXPOSURE' | 'CRITICAL_ACTION_REQUIRED';
  readonly observationSummaryText: string;
  readonly calculatedConfidenceScoreRatioDecimal: number; // 0.0 to 1.0 AI precision
  readonly detectedSigmaOffsetValue: number; // Statistical deviation indicator
  readonly associatedEntityReferenceId?: string; // e.g. supplierInvoiceId or allocationId
  readonly recommendedMitigationActionText: string;
  readonly isResolvedFlag: boolean;
  readonly createdAt: Date;
}

import { CustomerInvoice } from './customer-invoice.js';

export interface AgingBucket {
  readonly intervalLabel: 'CURRENT_0_30' | 'OVERDUE_31_60' | 'OVERDUE_61_90' | 'CRITICAL_91_PLUS';
  readonly outstandingInvoicesList: CustomerInvoice[];
  readonly aggregateOutstandingAmount: number;
}

export interface ReceivablesAgingAnalysis {
  readonly analysisId: string;
  readonly uniqueAnalysisCode: string; // e.g. "AGE-REC-2026-M07"
  readonly reportDate: Date;
  readonly totalOutstandingReceivablesAmount: number;
  readonly bucketsList: AgingBucket[];
  readonly writeOffEstimateAmount: number; // Potential bad debt estimate
  readonly currencyCode: string;
  readonly lastCalculatedAt: Date;
}

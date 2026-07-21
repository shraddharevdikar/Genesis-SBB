export type RevRecMethodCode = 'PERCENTAGE_OF_COMPLETION' | 'COMPLETED_CONTRACT' | 'STRAIGHT_LINE_MONTHLY' | 'DELIVERABLE_ACHIEVED';

export interface RevenueRecognitionScheduleRow {
  readonly recognitionPeriodLabelText: string; // e.g. "2026-10", "2026-11"
  readonly amountToRecognizeDecimal: number;
  readonly recognizedFlag: boolean;
  readonly recognitionCompletedTimestamp?: Date;
  readonly generalLedgerReferenceJournalString?: string; // Links to FinanceOS journal
}

export interface RevenueRecognition {
  readonly revenueRecognitionId: string;
  readonly uniqueRevenueRecognitionCode: string; // e.g., "REV-REC-ENG-2026-ACME"
  readonly associatedEngagementIdString: string; // Links to Engagement
  readonly revenueRecognitionMethod: RevRecMethodCode;
  readonly totalContractRevenueRecognizedToDate: number;
  readonly totalContractRevenueDeferredRemaining: number;
  readonly schedulesList: RevenueRecognitionScheduleRow[];
  readonly complianceStandardCodeText: 'ASC_606' | 'IFRS_15'; // Audit and compliance standard
  readonly activeStatusFlag: boolean;
  readonly calculatedAt: Date;
}

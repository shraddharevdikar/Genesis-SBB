export interface ScheduledPaymentItem {
  readonly paymentItemId: string;
  readonly supplierInvoiceIdString: string;
  readonly plannedPaymentDate: Date;
  readonly scheduledAmount: number;
  readonly currencyCode: string;
  readonly targetBankIbanDestinationText: string;
  readonly approvalStatus: 'PENDING_APPROVAL' | 'APPROVED' | 'RELEASED_TO_BANK' | 'COMPLETED' | 'CANCELLED';
}

export interface PaymentSchedule {
  readonly scheduleId: string;
  readonly uniqueScheduleCode: string; // e.g. "SCH-PAY-2026-W29"
  readonly executionWeekStart: Date;
  readonly totalScheduledDisbursementAmount: number;
  readonly itemsList: ScheduledPaymentItem[];
  readonly currencyCode: string;
  readonly isReleasedFlag: boolean;
  readonly releasedByOperatorRoleId?: string;
  readonly releasedAt?: Date;
}

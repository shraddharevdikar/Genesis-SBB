export interface PaymentApprovedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly approvalId: string;
  readonly targetScheduledPaymentItemIdString: string;
  readonly transactionAmount: number;
  readonly currencyCode: string;
  readonly payeeSupplierName: string;
  readonly approvedByOperatorRoleIdsList: string[];
  readonly traceId: string;
  readonly timestamp: Date;
}

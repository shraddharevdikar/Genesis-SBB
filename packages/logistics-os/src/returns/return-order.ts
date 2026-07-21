export type ReturnOrderReasonCode = 'DEFECTIVE_RECALL' | 'WRONG_ITEM_SHIPPED' | 'CUSTOMER_MIND_CHANGED' | 'DAMAGED_IN_TRANSIT';

export interface ReturnOrderLineItem {
  readonly originalSkuCodeString: string;
  readonly quantityReturnedCount: number;
  readonly returnReason: ReturnOrderReasonCode;
  readonly anticipatedRefundPercentageDecimal: number; // e.g. 1.0 for full refund
}

export interface ReturnOrder {
  readonly returnOrderId: string;
  readonly uniqueReturnOrderCode: string; // e.g. "RMA-2026-00424" (Return Merchandise Auth)
  readonly associatedSalesOrderIdString?: string; // Original purchase (SalesOS)
  readonly customerNameString: string;
  readonly customerEmailAddressText: string;
  readonly returnOrderLinesList: ReturnOrderLineItem[];
  readonly rmaStatus: 'RMA_AUTHORIZED' | 'PACKAGE_STAGED_PICKUP' | 'RECEIVED_AT_HUB' | 'INSPECTED_PROCESSED' | 'CREDIT_REFUND_APPROVED' | 'REJECTED_EXPIRED';
  readonly preAuthorizedRefundCreditAmount: number; // Links to FinanceOS ledger
  readonly issuedTimestamp: Date;
  readonly lastModifiedAt: Date;
}

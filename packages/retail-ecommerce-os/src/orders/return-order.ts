import { ReturnStatus } from '../core/commerce-lifecycle.js';

export interface ReturnItemLine {
  readonly originalLineItemIdString: string;
  readonly skuCodeString: string;
  readonly quantityReturned: number;
  readonly returnReasonCategory: 'SIZE_FIT_ISSUES' | 'DEFECTIVE_DAMAGED' | 'NOT_AS_DESCRIBED' | 'BUYERS_REMORSE' | 'LATE_DELIVERY';
  readonly customerDetailedNotesString?: string;
  readonly itemInspectionCondition: 'PENDING_INSPECTION' | 'PERFECT_RE_SELLABLE' | 'OPENED_RE_PACK_REQUIRED' | 'DAMAGED_REJECT_OR_SCRAP';
  readonly restockingInventoryLocationIdString?: string;
}

export interface ReturnOrder {
  readonly returnOrderId: string;
  readonly uniqueReturnCode: string; // e.g., "RET-2026-CH-012"
  readonly associatedSalesOrderIdString: string;
  readonly returnedItemsList: ReturnItemLine[];
  readonly totalRefundCalculatedAmount: number;
  readonly currencyCode: string;
  readonly hasOriginalReceiptFlag: boolean;
  readonly returnStatus: ReturnStatus;
  readonly refundProcessingMethod: 'ORIGINAL_PAYMENT_METHOD' | 'GIFT_CARD_CREDIT' | 'EXCHANGE_ITEM_OFFSET';
  readonly requestorStaffRoleIdString: string; // supervisor who authorized, or customer portal
  readonly createdAt: Date;
  readonly resolvedAt?: Date;
}

import { PurchaseOrderLifecycleState } from '../core/finance-lifecycle.js';
import { PurchaseRequestLineItem } from './purchase-request.js';
import { ProcurementPolicy } from './procurement-policy.js';

export interface PurchaseOrderId {
  readonly value: string;
}

export interface PurchaseOrder {
  readonly purchaseOrderId: PurchaseOrderId;
  readonly uniquePoCode: string; // e.g. "PO-2026-0042"
  readonly vendorIdString: string;
  readonly associatedRequestCodeString?: string; // Reference back to the original request
  readonly lineItemsList: PurchaseRequestLineItem[];
  readonly totalNetCostAmount: number;
  readonly currencyCode: string; // e.g. "CHF"
  readonly deliveryAddressStreetText: string;
  readonly deliveryAddressCityText: string;
  readonly deliveryAddressCountryCode: string;
  readonly plannedDeliveryDate?: Date;
  readonly actualDeliveredDate?: Date;
  readonly appliedProcurementPolicy: ProcurementPolicy;
  readonly isApprovedFlag: boolean;
  readonly currentState: PurchaseOrderLifecycleState;
  readonly buyerOperatorRoleId: string;
  readonly approvedByOperatorRoleId?: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}

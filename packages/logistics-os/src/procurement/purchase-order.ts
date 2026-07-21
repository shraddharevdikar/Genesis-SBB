export type PurchaseOrderStatus = 'DRAFT' | 'APPROVED_PENDING_SEND' | 'SENT_TO_SUPPLIER' | 'PARTIALLY_RECEIVED' | 'FULLY_RECEIVED' | 'CANCELLED';

export interface PurchaseOrderLineItem {
  readonly itemIdString: string; // Links to InventoryItem
  readonly itemSkuCodeString: string;
  readonly displayTitleString: string;
  readonly quantityOrderedCount: number;
  readonly quantityReceivedToDateCount: number;
  readonly unitCostPriceAmount: number; // Linked with FinanceOS accounting
  readonly taxRatePercentageDecimal: number;
  readonly expectedDeliveryDate: Date;
}

export interface PurchaseOrder {
  readonly purchaseOrderId: string;
  readonly uniquePurchaseOrderCode: string; // e.g. "PO-2026-FALL-0012"
  readonly associatedSupplierIdString: string; // Links to Supplier
  readonly orderStatus: PurchaseOrderStatus;
  readonly lineItemsList: PurchaseOrderLineItem[];
  readonly totalNetCostAmount: number;
  readonly totalTaxesAmount: number;
  readonly totalGrossCostAmount: number;
  readonly targetWarehouseIdString: string; // Destination warehouse ID
  readonly financeAuthorizationSignatureString?: string; // Links to FinanceOS budget release
  readonly notesText?: string;
  readonly orderPlacedTimestamp: Date;
  readonly lastModifiedAt: Date;
}

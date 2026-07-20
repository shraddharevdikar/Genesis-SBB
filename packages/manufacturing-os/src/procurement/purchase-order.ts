import { ProductId } from '../products/product.js';
import { SupplierId } from './supplier.js';

export interface PurchaseOrderLine {
  readonly poLineId: string;
  readonly associatedRequisitionIdString?: string;
  readonly targetProductId: ProductId;
  readonly orderedQuantity: number;
  readonly agreedUnitCostAmount: number;
  readonly lineTotalCostAmount: number;
  readonly receivedQuantity: number;
  readonly expectedDeliveryDate: Date;
}

export interface PurchaseOrder {
  readonly purchaseOrderId: string;
  readonly uniquePoCode: string; // e.g. "PO-2026-CH-0422"
  readonly associatedSupplierId: SupplierId;
  readonly buyerStaffRoleIdString: string; // Links to HROS / Role
  readonly purchaseOrderLinesList: PurchaseOrderLine[];
  readonly grossSubtotalAmount: number;
  readonly currencyCode: string;
  readonly paymentTermsAgreementDaysCount: number;
  readonly poStatus: 'DRAFT' | 'SENT_TO_SUPPLIER' | 'CONFIRMED_BY_SUPPLIER' | 'PARTIALLY_RECEIVED' | 'FULLY_RECEIVED_CLOSED' | 'CANCELLED';
  readonly signedApprovalDocumentURI?: string; // Links to LegalOS standard
  readonly issuedAt: Date;
  readonly closedAt?: Date;
}

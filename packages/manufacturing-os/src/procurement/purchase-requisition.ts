import { ProductId } from '../products/product.js';

export interface RequisitionLine {
  readonly lineItemId: string;
  readonly targetProductId: ProductId;
  readonly quantityRequested: number;
  readonly unitCostEstimatedAmount: number;
  readonly requestedDeliveryDate: Date;
}

export interface PurchaseRequisition {
  readonly requisitionId: string;
  readonly uniqueRequisitionCode: string; // e.g. "PRQ-2026-00421"
  readonly requisitioningDepartmentIdString: string; // Links to OperationsOS / HR
  readonly requestorStaffRoleIdString: string; // Links to HROS / Role
  readonly requisitionLinesList: RequisitionLine[];
  readonly totalEstimatedCostAmount: number;
  readonly currencyCode: string;
  readonly approvedAt?: Date;
  readonly requisitionStatus: 'DRAFT' | 'SUBMITTED_FOR_APPROVAL' | 'APPROVED' | 'PARTIALLY_ORDERED' | 'FULLY_ORDERED' | 'REJECTED';
  readonly lastModifiedAt: Date;
}

export interface PurchaseRequestLineItem {
  readonly lineItemId: string;
  readonly productDescriptionText: string;
  readonly quantityNumeric: number;
  readonly estimatedUnitPriceAmount: number;
  readonly totalLineEstimatedAmount: number; // qty * estimated price
}

export interface PurchaseRequest {
  readonly requestId: string;
  readonly uniqueRequestCode: string; // e.g. "PR-2026-07-0012"
  readonly requesterOperatorRoleId: string; // Who wants to buy
  readonly targetDepartmentIdString: string; // Department budget owner
  readonly lineItemsList: PurchaseRequestLineItem[];
  readonly totalEstimatedAmount: number;
  readonly currencyCode: string;
  readonly businessJustificationNotes: string;
  readonly associatedBudgetCategoryCode: string; // e.g. "OPEX_SOFTWARE_SaaS"
  readonly approvalStatus: 'DRAFT' | 'PENDING_BUDGET_OWNER_APPROVAL' | 'PENDING_CFO_APPROVAL' | 'APPROVED' | 'REJECTED';
  readonly rejectedReasonText?: string;
  readonly requestedAt: Date;
  readonly resolvedAt?: Date;
}

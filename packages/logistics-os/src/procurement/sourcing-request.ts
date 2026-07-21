export type SourcingRequestStatus = 'OPEN_BIDDING' | 'REVIEW_PROPOSALS' | 'SUPPLIER_AWARDED' | 'EXPIRED_CLOSED';

export interface SourcingBidProposal {
  readonly bidId: string;
  readonly uniqueBidCode: string;
  readonly associatedSupplierIdString: string;
  readonly bidSubmissionTimestamp: Date;
  readonly quotedLeadTimeDaysCount: number;
  readonly unitPriceQuoteAmount: number;
  readonly sampleApprovedFlag: boolean;
  readonly bidSourcingSpecialRemarksText?: string;
}

export interface SourcingRequest {
  readonly sourcingRequestId: string;
  readonly uniqueSourcingRequestCode: string; // e.g. "SRC-REQ-2026-0042"
  readonly requestedItemNameString: string;
  readonly itemDetailedSpecificationText: string;
  readonly targetQuantityRequestedCount: number;
  readonly maximumBudgetLimitAmount: number;
  readonly requestDeadlineDate: Date;
  readonly sourcingRequestStatus: SourcingRequestStatus;
  readonly receivedBidsList: SourcingBidProposal[];
  readonly awardedSupplierIdString?: string;
  readonly awardedBidIdString?: string;
  readonly generatedPurchaseOrderIdString?: string; // Links to PurchaseOrder once finalized
  readonly lastModifiedAt: Date;
}

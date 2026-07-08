export interface CapitalAllocation {
  readonly allocationId: string;
  readonly opportunityId: string;
  readonly allocatedAmountUSD: number;
  readonly approvedBy: string; // executive who authorized
  readonly allocationStatus: 'PENDING' | 'APPROVED' | 'DISBURSED' | 'REJECTED';
  readonly allocatedAt: Date;
}

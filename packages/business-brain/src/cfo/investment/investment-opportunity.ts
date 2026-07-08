export interface InvestmentOpportunity {
  readonly opportunityId: string;
  readonly name: string;
  readonly description: string;
  readonly initialOutlayUSD: number;
  readonly estimatedRiskLevel: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
  readonly strategicAlignmentScore: number; // Scale of 1 to 100
  readonly proposedBy: string; // e.g., 'CTO', 'COO'
  readonly status: 'PENDING_REVIEW' | 'APPROVED' | 'REJECTED' | 'DEFERRED';
}

export interface Dispute {
  readonly disputeId: string;
  readonly uniqueDisputeCode: string; // e.g. "DSP-VENDOR-ACME-01"
  readonly claimantEntityName: string;
  readonly respondentEntityName: string;
  readonly associatedContractIdString?: string;
  readonly disputeResolutionMethod: 'NEGOTIATION' | 'MEDIATION' | 'ARBITRATION' | 'LITIGATION';
  readonly valueUnderDispute: number;
  readonly currencyCode: string;
  readonly briefSummaryNotes: string;
  readonly settlementOfferAmount?: number;
  readonly resolvedFlag: boolean;
  readonly resolvedAt?: Date;
  readonly createdAt: Date;
}

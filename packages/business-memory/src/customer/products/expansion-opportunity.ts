export interface ExpansionOpportunity {
  readonly opportunityId: string;
  readonly tenantId: string;
  readonly customerOrganizationId: string;
  readonly type: 'CROSS_SELL' | 'UPSELL' | 'VOLUME_EXPANSION' | 'ADD_ON_SERVICES';
  readonly targetedProductId: string; // references ProductCatalogItem / ServiceId
  readonly estimatedContractValueUSD: number;
  readonly confidenceScorePercent: number; // 0 to 100
  readonly strategicRationale: string;
  readonly currentDealStage: 'IDENTIFIED' | 'QUALIFIED' | 'PROPOSED' | 'NEGOTIATION' | 'CLOSED_WON' | 'CLOSED_LOST';
  readonly championContactId?: string; // references CustomerContact
}

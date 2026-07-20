export type LeadSourceTypeCode =
  | 'CO_COLD_OUTREACH'
  | 'IB_INBOUND_WEBSITE'
  | 'EV_OFFLINE_EVENT'
  | 'PR_PARTNER_REFERRAL'
  | 'OS_ORGANIC_SEARCH'
  | 'PM_PAID_MEDIA'
  | 'GE_GENERATIVE_ENGINE' // GEO citations
  | 'AE_ANSWER_ENGINE'; // AEO speech snippets

export interface LeadSource {
  readonly sourceId: string;
  readonly uniqueSourceCode: string; // e.g., "SRC-GEO-GEMINI"
  readonly displayName: string;
  readonly sourceType: LeadSourceTypeCode;
  readonly utmSourceParameterString?: string;
  readonly utmMediumParameterString?: string;
  readonly utmCampaignParameterString?: string;
  readonly trackingTokenCode?: string;
}

export type OriginalSourceTypeCode =
  | 'ORGANIC_SEARCH'
  | 'ORGANIC_CONVERSATIONAL' // GEO/AEO
  | 'PAID_SEARCH_SEM'
  | 'PAID_SOCIAL_ADS'
  | 'EMAIL_CAMPAIGN'
  | 'DIRECT_TRAFFIC'
  | 'REFERRAL_AFFILIATE'
  | 'OFFLINE_EVENT';

export interface LeadSource {
  readonly sourceId: string;
  readonly uniqueSourceCode: string; // e.g. "SRC-SEO-CH"
  readonly displayName: string;
  readonly sourceType: OriginalSourceTypeCode;
  readonly utmSourceParameterString?: string;
  readonly utmMediumParameterString?: string;
  readonly utmCampaignParameterString?: string;
  readonly totalLeadsGeneratedCount: number;
  readonly averageLeadQualityScoreNumeric: number; // e.g. 0 to 100 lead score
}

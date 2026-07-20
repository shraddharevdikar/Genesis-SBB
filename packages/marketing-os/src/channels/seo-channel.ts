export interface KeywordPerformance {
  readonly keywordText: string;
  readonly globalSearchVolumeMonthly: number;
  readonly organicDifficultyScore: number; // 0-100
  readonly averageRankPositionNumeric: number;
  readonly currentCpcEstimateAmount: number;
}

export interface SeoChannel {
  readonly channelId: string;
  readonly uniqueChannelCode: string; // e.g. "CHN-SEO-CH"
  readonly targetKeywordsList: KeywordPerformance[];
  readonly targetDomainURL: string;
  readonly monthlyOrganicSessionsCount: number;
  readonly domainAuthorityScore: number; // 0-100
  readonly technicalHealthScore: number; // 0-100
  readonly sitemapURL: string;
}

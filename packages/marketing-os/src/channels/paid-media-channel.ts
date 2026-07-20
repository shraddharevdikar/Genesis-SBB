export type PaidPlatformTypeCode =
  | 'GOOGLE_ADS'
  | 'META_ADS'
  | 'LINKEDIN_ADS'
  | 'PROGRAMMATIC_DSP';

export interface AdCreativeSpecification {
  readonly creativeId: string;
  readonly headingText: string;
  readonly bodyTextString: string;
  readonly imageUrlString?: string;
  readonly targetLandingPageURL: string;
  readonly isApprovedFlag: boolean;
}

export interface PaidMediaChannel {
  readonly channelId: string;
  readonly uniqueChannelCode: string; // e.g. "CHN-PAID-SEM"
  readonly platformType: PaidPlatformTypeCode;
  readonly adAccountIdentifier: string; // External system key reference
  readonly liveCreativesList: AdCreativeSpecification[];
  readonly totalImpressionsCount: number;
  readonly clickThroughRateRatio: number;
  readonly costPerClickAverageAmount: number;
  readonly totalAdSpendAmount: number;
  readonly budgetCapSpendLimit: number;
}

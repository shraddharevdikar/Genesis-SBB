export interface EmailAudienceSegment {
  readonly segmentId: string;
  readonly querySelectorCriteriaJSON: string; // Describes audience filtering rules
  readonly totalSubscribersCount: number;
}

export interface EmailCampaignTemplate {
  readonly templateId: string;
  readonly senderNameString: string;
  readonly senderEmailString: string;
  readonly subjectLineText: string;
  readonly bodyHtmlContentString: string;
  readonly conversionLinkUrl: string;
}

export interface EmailChannel {
  readonly channelId: string;
  readonly uniqueChannelCode: string; // e.g. "CHN-EMAIL-NEWSLETTER"
  readonly audienceSegmentsList: EmailAudienceSegment[];
  readonly templatesCatalog: EmailCampaignTemplate[];
  readonly bounceRatePercentage: number;
  readonly averageOpenRatePercentage: number;
  readonly clickThroughRatePercentage: number;
  readonly totalUnsubscribedCount: number;
}

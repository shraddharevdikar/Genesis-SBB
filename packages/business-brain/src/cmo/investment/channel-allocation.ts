export interface ChannelBudget {
  readonly channelId: string;
  readonly channelName: 'PAID_SEARCH' | 'PAID_SOCIAL' | 'CONTENT_MARKETING' | 'EVENTS_CONFERENCES' | 'INFLUENCER_AFFILIATE' | 'EMAIL_AUTOMATION' | 'SEO_ORGANIC';
  readonly allocatedAmountUSD: number;
  readonly expectedCACUSD: number;
  readonly conversionTargetPercent: number;
  readonly remarks: string;
}

export interface ChannelAllocation {
  readonly allocationId: string;
  readonly tenantId: string;
  readonly investmentId: string; // references MarketingInvestment
  readonly channels: ChannelBudget[];
  readonly reserveBufferUSD: number;
  readonly strategicJustification: string;
  readonly updatedAt: Date;
}

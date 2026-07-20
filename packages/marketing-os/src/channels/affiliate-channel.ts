export interface AffiliatePartner {
  readonly partnerId: string;
  readonly legalCompanyName: string;
  readonly primaryContactEmailString: string;
  readonly standardCommissionPercentageDecimal: number; // e.g. 0.15 for 15%
  readonly trackingTokenCode: string; // appended to query strings
  readonly isAccreditedFlag: boolean;
}

export interface AffiliateChannel {
  readonly channelId: string;
  readonly uniqueChannelCode: string; // e.g. "CHN-AFF-RESELLERS"
  readonly activePartnersList: AffiliatePartner[];
  readonly totalReferralsCount: number;
  readonly totalCommissionPayoutsAmount: number;
  readonly currencyCode: string; // e.g. "CHF"
  readonly payoutSchedulesCronExpression: string;
}

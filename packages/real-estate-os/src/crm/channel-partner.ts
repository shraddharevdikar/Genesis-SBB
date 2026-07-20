export interface ChannelPartner {
  readonly partnerId: string;
  readonly uniquePartnerCode: string; // e.g. "CP-GLOBAL-AGENTS"
  readonly firmNameString: string;
  readonly headOfficeAddress: string;
  readonly authorizedSignatoryName: string;
  readonly contactEmailAddress: string;
  readonly tierClassification: 'BRONZE' | 'SILVER' | 'GOLD' | 'PLATINUM';
  readonly specialCommissionOverridePercentageDecimal?: number; // extra override factor
  readonly totalReferralsConfirmedCount: number;
  readonly activeStatusFlag: boolean;
  readonly contractedAt: Date;
  readonly lastModifiedAt: Date;
}

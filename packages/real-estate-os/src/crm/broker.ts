export interface Broker {
  readonly brokerId: string;
  readonly uniqueBrokerCode: string; // e.g. "BRK-ZURICH-LTD"
  readonly agencyNameString: string;
  readonly leadBrokerNameString: string;
  readonly contactEmailAddress: string;
  readonly contactPhoneNumber: string;
  readonly officialRegulatoryLicenseCode?: string; // e.g. broker license index
  readonly standardCommissionRateDecimal: number; // e.g. 0.02 (2% commission)
  readonly complianceVerifiedFlag: boolean;
  readonly performanceRatingDecimal: number; // e.g. 4.8 out of 5.0
  readonly activeFlag: boolean;
  readonly contractedAt: Date;
}

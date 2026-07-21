export interface CustomerId {
  readonly value: string;
}

export interface RetailCustomerProfile {
  readonly customerId: CustomerId;
  readonly uniqueCustomerCode: string; // e.g., "CUST-9923-014"
  readonly firstName: string;
  readonly lastName: string;
  readonly emailAddress: string;
  readonly phoneNumberString?: string;
  readonly billingAddressString?: string;
  readonly defaultShippingAddressString?: string;
  readonly registrationDate: Date;
  readonly lifecycleSegment: 'NEW_ACQUISITION' | 'ACTIVE_LOYAL' | 'AT_RISK_CHURN' | 'INACTIVE_LAPSED';
  readonly hasMarketingConsentFlag: boolean;
  readonly optedInSmsFlag: boolean;
  readonly preferredLanguageLocale: string; // e.g. "en-US"
  readonly lastActiveAt: Date;
}

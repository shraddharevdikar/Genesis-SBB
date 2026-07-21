export interface RetailContext {
  readonly tenantId: string;
  readonly correlationTraceId: string;
  readonly actingUserRoleId: string; // Links to Role (e.g., "MERCHANDISING_MANAGER", "STORE_MANAGER", "Fulfillment_Supervisor")
  readonly localeCode: string; // e.g., "en-US"
  readonly executionTimezone: string; // e.g., "America/New_York"
  readonly timestamp: Date;
  readonly businessOperatingSystemCode: 'RETAIL_ECOMMERCE_OS';
  readonly channelSource: 'ONLINE_STOREFRONT' | 'POINT_OF_SALE_STORE' | 'MOBILE_COMMERCE_APP' | 'MARKETPLACE_INTEGRATION' | 'WHOLESALE_PORTAL';
  readonly isTestTransactionFlag: boolean;
}

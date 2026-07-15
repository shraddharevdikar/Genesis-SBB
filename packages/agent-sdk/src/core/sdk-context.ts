export interface SdkContext {
  readonly tenantId: string;
  readonly developerId: string;
  readonly environment: 'LOCAL_SIMULATOR' | 'INTEGRATED_SANDBOX' | 'PRODUCTION_STAGING';
  readonly traceId: string;
  readonly timestamp: Date;
}

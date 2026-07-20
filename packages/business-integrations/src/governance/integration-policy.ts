export type DataSovereigntyRegionCode = 'EU_GDPR_COMPLIANT' | 'CH_DSG_COMPLIANT' | 'US_HIPAA_COMPLIANT' | 'GLOBAL_RESTRICTED';

export interface IntegrationPolicy {
  readonly policyId: string;
  readonly uniquePolicyCode: string; // e.g. "POL-INT-DATA-SOVEREIGNTY"
  readonly allowedRegionsList: DataSovereigntyRegionCode[];
  readonly isDataMaskingRequiredForPiiFlag: boolean;
  readonly maxDailySyncPayloadVolumeGb: number;
  readonly sbbComplianceDocumentURI?: string; // links to packages/business-policies
}

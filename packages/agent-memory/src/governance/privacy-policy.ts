export interface PrivacyPolicy {
  readonly policyId: string;
  readonly tenantId: string;
  readonly enableDynamicAnonymization: boolean;
  readonly forbiddenDataClasses: string[]; // e.g. ["SWISS_AHV_NUMBER", "CREDIT_CARD", "PERSONAL_PASSPORT"]
  readonly automaticDataLeakAlertEmail: string;
  readonly consentValidatorServiceUri?: string;
  readonly updatedAt: Date;
}

export interface SdkPolicy {
  readonly policyId: string;
  readonly minAllowedSdkVersion: string;
  readonly deprecateIncompatibleExtensions: boolean;
  readonly enforceSignatureValidation: boolean;
  readonly autoBlockVulnerableExtensions: boolean;
  readonly allowedDeveloperDomainsList: string[];
}

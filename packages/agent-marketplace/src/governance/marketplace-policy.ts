export interface MarketplacePolicy {
  readonly policyId: string;
  readonly tenantId: string;
  readonly code: string; // e.g. "SBB_PUBLISH_RESTRICTION"
  readonly requireMfaForPublishing: boolean;
  readonly allowedPublisherDomainsList: string[]; // e.g. ["*.sbb.ch"]
  readonly enforceAutomaticSecurityScans: boolean;
  readonly blockNonCertifiedPackages: boolean;
  readonly isActive: boolean;
}

export interface ComplianceFramework {
  readonly frameworkId: string;
  readonly uniqueFrameworkCode: string; // e.g. "REG-CH-FINMA-2026"
  readonly displayName: string;
  readonly issuingAuthorityString: string; // e.g. "FINMA", "EU Parliament"
  readonly jurisdictionCodeString: string; // e.g. "CH", "EU", "US"
  readonly websiteURI?: string;
  readonly criticalFlag: boolean;
  readonly activeFlag: boolean;
  readonly lastReviewedAt: Date;
}

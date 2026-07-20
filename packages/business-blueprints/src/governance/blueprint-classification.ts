export type BlueprintConfidentialityLevelCode =
  | 'PUBLIC_OPEN_SOURCE'
  | 'INTERNAL_COMMERCIAL'
  | 'RESTRICTED_DEPARTMENTAL'
  | 'HIGHLY_CONFIDENTIAL_EXECUTIVE';

export interface BlueprintClassification {
  readonly classificationId: string;
  readonly confidentialityLevel: BlueprintConfidentialityLevelCode;
  readonly isAllowedForSelfServiceProvisioning: boolean;
  readonly regulatoryScopeReferenceCode?: string; // e.g. "CH-GDPR-2026"
  readonly auditRevisionCodeString: string;
}

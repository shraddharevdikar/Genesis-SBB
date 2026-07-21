export type ServiceAgreementStatusCode = 'DRAFT' | 'LEGAL_REVIEW' | 'SIGNED_ACTIVE' | 'EXPIRED' | 'TERMINATED';

export interface ServiceAgreementRateRow {
  readonly consultantRoleCategoryCode: string; // e.g. "PRN-CON", "SEN-CON", "JUN-CON"
  readonly practiceAreaCode: string; // e.g. "CLD-ENG"
  readonly hourlyBillingRateAmount: number; // Rate card for Time & Materials billing
}

export interface ServiceAgreement {
  readonly serviceAgreementId: string;
  readonly uniqueServiceAgreementCode: string; // e.g. "MSA-2026-ACME-01" (Master Services Agreement)
  readonly associatedClientIdString: string; // Links to Client
  readonly governingLawCountryRegionText: string; // LegalOS jurisdiction compliance
  readonly rateCardRowsList: ServiceAgreementRateRow[];
  readonly confidentialityClauseFlag: boolean;
  readonly intellectualPropertyAssignmentTypeCode: 'CLIENT_RETAINED' | 'PROVIDER_RETAINED' | 'JOINT_OWNERSHIP';
  readonly standardPaymentTermsCodeString: string; // Net Terms code
  readonly liabilityCapAmountLimitDecimal: number; // Insurance coverage ceiling
  readonly contractDocumentUriString?: string; // Digital signing attachment
  readonly currentStatus: ServiceAgreementStatusCode;
  readonly effectiveStartDate: Date;
  readonly effectiveEndDate: Date;
  readonly signedTimestamp?: Date;
  readonly lastModifiedAt: Date;
}

export interface QualityStandard {
  readonly standardId: string;
  readonly uniqueStandardCode: string; // e.g. "STD-QAS-ISO-9001"
  readonly displayName: string;
  readonly detailedParametersJSON: string; // parameters to check against
  readonly category: 'COMPLIANCE' | 'MANUFACTURING' | 'SOFTWARE_RELEASE' | 'CUSTOMER_SERVICE_QA';
  readonly acceptableFailureToleranceRatioDecimal: number; // e.g. 0.01 for 1%
  readonly activeFlag: boolean;
  readonly lastReviewedAt: Date;
}

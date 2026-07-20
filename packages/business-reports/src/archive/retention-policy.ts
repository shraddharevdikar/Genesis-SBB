export type RetentionTriggerCode =
  | 'AFTER_PUBLICATION_DATE'
  | 'FISCAL_YEAR_END_CLOSE'
  | 'ON_MANUAL_ARCHIVAL_TRIGGER';

export interface RetentionPolicy {
  readonly policyId: string;
  readonly uniquePolicyCode: string; // e.g. "RET-POL-FIN-10Y"
  readonly retentionPeriodYearsCount: number; // e.g. 10 years for tax records
  readonly triggerCode: RetentionTriggerCode;
  readonly isPermanentArchiveRequired: boolean;
  readonly isUnderLegalHoldFlag: boolean; // if true, prevents automated purge
  readonly legalHoldReasonDescription?: string;
}

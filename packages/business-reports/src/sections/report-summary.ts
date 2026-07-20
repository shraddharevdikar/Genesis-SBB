export interface ReportSummary {
  readonly summaryId: string;
  readonly totalPageCount: number;
  readonly totalSectionCount: number;
  readonly compiledByOperatorRoleIdString: string;
  readonly auditVerificationHashValue: string; // e.g. cryptographic SHA256 of metadata
  readonly keyFindingsBulletedList: string[];
}

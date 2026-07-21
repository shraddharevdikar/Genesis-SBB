export interface HospitalityReportColumn {
  readonly displayColumnName: string;
  readonly databaseFieldCode: string;
  readonly formatCode: 'NUMBER_DECIMAL' | 'TEXT' | 'DATETIME' | 'RATIO_PERCENT' | 'CURRENCY_AMOUNT' | 'DURATION_MINUTES';
}

export interface HospitalityReport {
  readonly reportId: string;
  readonly uniqueReportCode: string; // e.g., "RPT-HOS-MONTHLY-REVPAR"
  readonly titleString: string;
  readonly objectiveSummaryText: string;
  readonly queryParametersJSON: string;
  readonly columnsList: HospitalityReportColumn[];
  readonly distributionEmailsList: string[];
  readonly storageURI?: string;
  readonly lastCalculatedAt?: Date;
}

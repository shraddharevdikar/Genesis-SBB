export interface HealthcareReportColumn {
  readonly displayColumnName: string;
  readonly databaseFieldCode: string;
  readonly formatCode: 'NUMBER_DECIMAL' | 'TEXT' | 'DATETIME' | 'RATIO_PERCENT' | 'CURRENCY';
}

export interface HealthcareReport {
  readonly reportId: string;
  readonly uniqueReportCode: string; // e.g. "RPT-HC-WARD-TRANSFERS"
  readonly titleString: string;
  readonly objectiveSummaryText: string;
  readonly queryParametersJSON: string;
  readonly columnsList: HealthcareReportColumn[];
  readonly distributionEmailsList: string[];
  readonly storageURI?: string;
  readonly lastCalculatedAt?: Date;
}

export interface RetailReportColumn {
  readonly displayColumnName: string;
  readonly databaseFieldCode: string;
  readonly formatCode: 'NUMBER_DECIMAL' | 'TEXT' | 'DATETIME' | 'RATIO_PERCENT' | 'CURRENCY';
}

export interface RetailReport {
  readonly reportId: string;
  readonly uniqueReportCode: string; // e.g. "RPT-RTL-DAILY-SALES"
  readonly titleString: string;
  readonly objectiveSummaryText: string;
  readonly queryParametersJSON: string;
  readonly columnsList: RetailReportColumn[];
  readonly distributionEmailsList: string[];
  readonly storageURI?: string;
  readonly lastCalculatedAt?: Date;
}

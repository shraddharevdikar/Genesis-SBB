export interface ExecutiveReportColumn {
  readonly displayColumnName: string;
  readonly databaseFieldCode: string;
  readonly formatCode: 'NUMBER_DECIMAL' | 'TEXT' | 'DATETIME' | 'RATIO_PERCENT' | 'CURRENCY';
}

export interface ExecutiveReport {
  readonly reportId: string;
  readonly uniqueReportCode: string; // e.g. "RPT-EXE-STRATEGIC-PROGRESS"
  readonly titleString: string;
  readonly objectiveSummaryText: string;
  readonly queryParametersJSON: string;
  readonly columnsList: ExecutiveReportColumn[];
  readonly distributionEmailsList: string[];
  readonly storageURI?: string;
  readonly lastCalculatedAt?: Date;
}

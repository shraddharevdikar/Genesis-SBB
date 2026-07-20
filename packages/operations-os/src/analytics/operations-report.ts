export interface OperationsReportColumn {
  readonly displayColumnName: string;
  readonly databaseFieldCode: string;
  readonly formatCode: 'NUMBER_DECIMAL' | 'TEXT' | 'DATETIME' | 'RATIO_PERCENT';
}

export interface OperationsReport {
  readonly reportId: string;
  readonly uniqueReportCode: string; // e.g. "RPT-OPS-WEEKLY-SLA"
  readonly titleString: string;
  readonly objectiveSummaryText: string;
  readonly parametersJSON: string;
  readonly columnsList: OperationsReportColumn[];
  readonly distributionEmailsList: string[];
  readonly storageURI?: string;
  readonly lastCalculatedAt?: Date;
}

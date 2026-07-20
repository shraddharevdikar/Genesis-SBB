export interface ManufacturingReportColumn {
  readonly displayColumnName: string;
  readonly databaseFieldCode: string;
  readonly formatCode: 'NUMBER_DECIMAL' | 'TEXT' | 'DATETIME' | 'RATIO_PERCENT' | 'CURRENCY';
}

export interface ManufacturingReport {
  readonly reportId: string;
  readonly uniqueReportCode: string; // e.g. "RPT-MFG-SCRAP-DEFECTS"
  readonly titleString: string;
  readonly objectiveSummaryText: string;
  readonly queryParametersJSON: string;
  readonly columnsList: ManufacturingReportColumn[];
  readonly distributionEmailsList: string[];
  readonly storageURI?: string;
  readonly lastCalculatedAt?: Date;
}

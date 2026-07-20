export interface HRReportColumn {
  readonly databaseFieldNameString: string;
  readonly displayColumnNameString: string;
  readonly formatType: 'STRING' | 'MONETARY_AMOUNT' | 'DATE' | 'DECIMAL_RATIO';
}

export interface HRReport {
  readonly reportId: string;
  readonly uniqueReportCode: string; // e.g. "RPT-HR-GENDER-PAY-GAP"
  readonly titleString: string;
  readonly purposeNotes: string;
  readonly filterCriteriaJSON: string;
  readonly columnsList: HRReportColumn[];
  readonly scheduledCronExpressionString?: string; // Automatically runs
  readonly generatedDocumentStorageURI?: string;
  readonly lastExecutionDate?: Date;
}

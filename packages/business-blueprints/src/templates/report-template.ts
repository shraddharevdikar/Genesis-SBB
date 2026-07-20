import { BusinessTemplate } from './business-template.js';

export interface ReportTemplate extends BusinessTemplate {
  readonly standardSbbReportCategoryCode: string; // e.g. "REP-FIN-AUDIT"
  readonly defaultExportFormatsList: string[]; // e.g. ["PDF", "XLSX", "JSON"]
  readonly schedulingRecurrenceCronExpression?: string;
  readonly defaultAggregationIntervalDaysCount: number;
}

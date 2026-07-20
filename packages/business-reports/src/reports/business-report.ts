import { ReportId } from '../identity/report-id.js';
import { ReportTemplate } from '../templates/report-template.js';
import { ReportChapter } from '../sections/report-chapter.js';
import { ReportSummary } from '../sections/report-summary.js';
import { ReportLifecycle } from '../core/report-lifecycle.js';
import { ReportVersion } from '../core/report-version.js';

export type BusinessReportCategoryCode =
  | 'EXECUTIVE_STRATEGY'
  | 'DEPARTMENTAL_OPERATIONS'
  | 'FINANCIAL_FISCAL'
  | 'GOVERNMENTAL_COMPLIANCE'
  | 'AI_AGENT_WORKFORCE_TELEMETRY';

export interface BusinessReport {
  readonly reportId: ReportId;
  readonly tenantId: string;
  readonly uniqueReportCode: string; // e.g. "RPT-2026-Q1-FIN"
  readonly displayName: string;
  readonly summaryDescription: string;
  readonly category: BusinessReportCategoryCode;
  readonly template: ReportTemplate;
  readonly chaptersList: ReportChapter[];
  readonly executiveSummary: ReportSummary;
  readonly version: ReportVersion;
  readonly lifecycle: ReportLifecycle;
}

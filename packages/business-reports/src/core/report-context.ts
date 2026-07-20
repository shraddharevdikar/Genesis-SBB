import { ReportId } from '../identity/report-id.js';

export interface ReportContext {
  readonly tenantId: string;
  readonly correlationTraceId: string;
  readonly activeOperatorRoleId: string;
  readonly activeReportId?: ReportId;
  readonly localeCode: string; // e.g. "en-US", "de-CH"
  readonly timestamp: Date;
}

import { ReportId } from '../identity/report-id.js';

export interface ReportPublishedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly reportId: ReportId;
  readonly uniqueReportCode: string;
  readonly versionSemanticString: string;
  readonly publishedByOperatorRoleId: string;
  readonly traceId: string;
  readonly timestamp: Date;
}

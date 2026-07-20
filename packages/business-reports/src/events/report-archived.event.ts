import { ReportId } from '../identity/report-id.js';

export interface ReportArchivedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly reportId: ReportId;
  readonly uniqueReportCode: string;
  readonly archiveIdString: string;
  readonly archivedByOperatorRoleId: string;
  readonly traceId: string;
  readonly timestamp: Date;
}

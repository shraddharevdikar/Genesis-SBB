import { ReportId } from '../identity/report-id.js';

export interface ReportCreatedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly reportId: ReportId;
  readonly uniqueReportCode: string;
  readonly displayName: string;
  readonly categoryCode: string;
  readonly createdByOperatorRoleId: string;
  readonly traceId: string;
  readonly timestamp: Date;
}

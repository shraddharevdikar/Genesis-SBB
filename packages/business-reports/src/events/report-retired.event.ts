import { ReportId } from '../identity/report-id.js';

export interface ReportRetiredEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly retiredReportId: ReportId;
  readonly uniqueReportCode: string;
  readonly retiredByOperatorRoleId: string;
  readonly traceId: string;
  readonly timestamp: Date;
}

import { ReportId } from '../identity/report-id.js';
import { RetentionPolicy } from './retention-policy.js';
import { ArchiveReference } from './archive-reference.js';

export interface ReportArchive {
  readonly archiveId: string;
  readonly targetReportId: ReportId;
  readonly retentionPolicy: RetentionPolicy;
  readonly reference: ArchiveReference;
  readonly archivedByOperatorRoleId: string;
  readonly commentsReasonNotesText?: string;
  readonly lastAuditVerificationDate: Date;
  readonly isPurgeAuthorizedFlag: boolean;
  readonly scheduledPurgeDate?: Date;
}

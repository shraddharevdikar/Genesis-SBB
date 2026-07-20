import { ReportVersion } from '../core/report-version.js';

export interface ReportPublication {
  readonly publicationId: string;
  readonly uniquePublicationCode: string; // e.g. "PUB-RPT-2026-V1"
  readonly targetReportIdString: string;
  readonly targetVersion: ReportVersion;
  readonly approvedByOperatorRoleId: string;
  readonly internalComplianceCertificationId?: string;
  readonly publicationReleaseNotesText?: string;
  readonly publishedAt: Date;
}

import { DashboardVersion } from '../core/dashboard-version.js';

export interface DashboardPublication {
  readonly publicationId: string;
  readonly uniquePublicationCode: string; // e.g. "PUB-DSH-2026-V1"
  readonly targetDashboardIdString: string;
  readonly targetVersion: DashboardVersion;
  readonly certifiedByOperatorRoleId: string;
  readonly auditComplianceVerificationIdString?: string;
  readonly releaseNotesText?: string;
  readonly publishedAt: Date;
}

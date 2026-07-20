import { ReportId } from '../identity/report-id.js';
import { ReportTemplateId } from '../identity/report-template-id.js';
import { ReportContext } from './report-context.js';
import { BusinessReport, BusinessReportCategoryCode } from '../reports/business-report.js';
import { ReportTemplate } from '../templates/report-template.js';
import { ReportPublication } from '../publication/report-publication.js';
import { ReportArchive } from '../archive/report-archive.js';
import { ReportDistribution } from '../publication/report-distribution.js';

export interface ReportFramework {
  /**
   * Spawns a brand-new multi-tenant, domain-independent business report document blueprint.
   */
  createReport(
    uniqueReportCode: string,
    category: BusinessReportCategoryCode,
    displayName: string,
    summaryDescription: string,
    templateId: ReportTemplateId,
    context: ReportContext
  ): Promise<BusinessReport>;

  /**
   * Defines or updates a standard document layout template composition.
   */
  defineTemplate(
    template: ReportTemplate,
    context: ReportContext
  ): Promise<ReportTemplateId>;

  /**
   * Transitions active status checks to APPROVED and PUBLISHED, broadcasting standard domain events.
   */
  publishReport(
    reportId: ReportId,
    context: ReportContext
  ): Promise<ReportPublication>;

  /**
   * Safe-locks report artifacts and registers archive records compliant with legal retention policies.
   */
  archiveReport(
    reportId: ReportId,
    commentsReasonNotesText: string,
    context: ReportContext
  ): Promise<ReportArchive>;

  /**
   * Triggers manual or automated distribution lists forwarding secure notifications to target channels.
   */
  distributeReport(
    reportId: ReportId,
    distribution: ReportDistribution,
    context: ReportContext
  ): Promise<void>;

  /**
   * Sunsets governed document access status to RETIRED, preventing further distributions or edits.
   */
  retireReport(
    reportId: ReportId,
    context: ReportContext
  ): Promise<void>;
}

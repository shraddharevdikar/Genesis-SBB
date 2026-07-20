import { ReportTemplateId } from '../identity/report-template-id.js';
import { TemplateLayout } from './template-layout.js';
import { TemplateBinding } from './template-binding.js';

export type ReportTemplateCategoryCode =
  | 'STANDARD_A4_DOCUMENT'
  | 'SLIDE_DECK_EXECUTIVE'
  | 'COMPLIANCE_DISCLOSURE'
  | 'SPREADSHEET_FINANCIAL_GRID'
  | 'REALTIME_AUDIT_LOG_EXPORT';

export interface ReportTemplate {
  readonly templateId: ReportTemplateId;
  readonly uniqueTemplateCode: string; // e.g. "RPT-TMPL-FIN-ANNUAL"
  readonly displayName: string;
  readonly descriptionNotesText?: string;
  readonly category: ReportTemplateCategoryCode;
  readonly layout: TemplateLayout;
  readonly dataBindingsList: TemplateBinding[];
  readonly localizationLocaleCode: string; // e.g. "en-US", "de-CH"
  readonly isLockedForEditing: boolean;
}

import { ReportSectionId } from '../identity/report-section-id.js';

export type ReportSectionTypeCode =
  | 'TEXT_MARKDOWN_CONTENT'
  | 'TABULAR_GRID_DATA'
  | 'KEY_KPI_CALLOUT'
  | 'SIGNATURE_EXECUTION_BLOCK'
  | 'LEGAL_DISCLAIMER_FOOTNOTE';

export interface ReportSection {
  readonly sectionId: ReportSectionId;
  readonly uniqueSectionCode: string; // e.g. "RPT-SEC-CEO-LETTER"
  readonly sectionType: ReportSectionTypeCode;
  readonly displayHeaderTitle: string;
  readonly sortingOrderIndex: number;
  readonly isMandatoryToInclude: boolean;
  readonly customSectionCssTemplateText?: string;
}

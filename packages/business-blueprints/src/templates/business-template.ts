import { TemplateId } from '../identity/template-id.js';

export type TemplateCategoryCode =
  | 'DEPARTMENT'
  | 'PROCESS'
  | 'WORKFLOW'
  | 'POLICY'
  | 'KPI'
  | 'DASHBOARD'
  | 'REPORT'
  | 'AUTOMATION'
  | 'INTEGRATION';

export interface BusinessTemplate {
  readonly templateId: TemplateId;
  readonly uniqueTemplateCode: string; // e.g. "TPL-KPI-ARR-GROWTH"
  readonly displayName: string;
  readonly descriptionNotesText: string;
  readonly categoryCode: TemplateCategoryCode;
  readonly rawSchemaSpecificationJSON: string; // Describes configuration properties
  readonly authorOperatorRoleId: string;
  readonly isSystemDefaultFlag: boolean;
  readonly createdAt: Date;
}

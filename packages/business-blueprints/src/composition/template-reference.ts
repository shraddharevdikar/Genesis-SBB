import { TemplateId } from '../identity/template-id.js';

export interface TemplateReference {
  readonly referenceId: string;
  readonly targetTemplateId: TemplateId;
  readonly templateUniqueCode: string; // e.g. "TPL-KPI-ARR-GROWTH"
  readonly instanceAliasString: string; // e.g. "finance-arr-kpi"
  readonly boundVariableOverridesJSON: string; // Allows customizing template attributes on composition
  readonly isMandatoryFlag: boolean;
}

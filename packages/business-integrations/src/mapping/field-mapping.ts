import { TransformationRule } from './transformation-rule.js';

export interface FieldMapping {
  readonly mappingId: string;
  readonly sourceFieldNamePath: string; // e.g. "crm_customer_id"
  readonly targetFieldNamePath: string; // e.g. "sbb_lead_id"
  readonly transformationRule?: TransformationRule;
  readonly isOptionalFieldFlag: boolean;
  readonly defaultFallbackValueString?: string;
}

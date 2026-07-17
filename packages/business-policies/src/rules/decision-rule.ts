import { BusinessRule } from './business-rule.js';

export interface DecisionRule {
  readonly baseRule: BusinessRule;
  readonly inputVariablesAllowedSchemaJsonString: string; // JSON schema checking input shape
  readonly outputDecisionVariablesSchemaJsonString: string; // JSON schema checking output shape
  readonly fallbackDefaultDecisionValueText: string;
}

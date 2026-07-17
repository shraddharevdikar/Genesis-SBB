export type BusinessRuleCategoryCode =
  | 'VALIDATION'
  | 'DECISION_FLOW'
  | 'COMPLIANCE_RESTRICTION'
  | 'INTEGRITY_CHECK';

export interface BusinessRule {
  readonly ruleId: string;
  readonly uniqueRuleCode: string; // e.g. "RUL-FIN-LIMIT"
  readonly title: string;
  readonly descriptionText: string;
  readonly category: BusinessRuleCategoryCode;
  readonly systemConstraintExpressionJsonString: string; // executable schema rules
}

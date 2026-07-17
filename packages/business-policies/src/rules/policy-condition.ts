export interface PolicyCondition {
  readonly conditionId: string;
  readonly evaluationExpressionJsonString: string; // JMESPath or json-rules-engine expression
  readonly customValidationMessageText: string;
  readonly comparisonOperatorSymbol: 'GREATER_THAN' | 'LESS_THAN' | 'EQUALS' | 'CONTAINS' | 'IN_LIST' | 'NOT_EQUALS';
  readonly targetLimitNumericValue?: number;
}

export type ConditionOperatorCode =
  | 'EQUALS'
  | 'GREATER_THAN'
  | 'LESS_THAN'
  | 'CONTAINS'
  | 'IN_SET'
  | 'BETWEEN'
  | 'EXISTS';

export interface AutomationCondition {
  readonly conditionId: string;
  readonly uniqueConditionCode: string; // e.g. "CND-FIN-EXP-LIMIT"
  readonly displayName: string;
  readonly operator: ConditionOperatorCode;
  readonly rightHandValueSerializedString?: string; // value evaluated against
  readonly isNegated: boolean; // logical NOT operator
}

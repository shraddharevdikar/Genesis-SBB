export interface ApprovalCondition {
  readonly conditionId: string;
  readonly fieldName: string;
  readonly operator: 'EQUALS' | 'NOT_EQUALS' | 'GREATER_THAN' | 'LESS_THAN' | 'CONTAINS' | 'IN' | 'AMOUNT_GREATER_THAN';
  readonly expectedValue: any;
}

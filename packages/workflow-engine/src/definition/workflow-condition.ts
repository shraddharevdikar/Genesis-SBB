export interface WorkflowCondition {
  readonly conditionId: string;
  readonly fieldName: string;
  readonly operator: 'EQUALS' | 'NOT_EQUALS' | 'GREATER_THAN' | 'LESS_THAN' | 'CONTAINS' | 'IN';
  readonly expectedValue: any;
}

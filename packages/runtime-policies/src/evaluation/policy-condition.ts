export interface PolicyCondition {
  readonly conditionId: string;
  readonly parameterName: string; // e.g. "concurrencyCount" or "userId"
  readonly operator: 'EQUALS' | 'NOT_EQUALS' | 'GREATER_THAN' | 'LESS_THAN' | 'CONTAINS' | 'MATCHES_REGEX' | 'IN';
  readonly expectedValue: string; // Stored as serialized string value
  readonly isNegated: boolean;
}

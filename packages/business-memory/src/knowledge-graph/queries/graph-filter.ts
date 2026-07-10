export interface PropertyFilter {
  readonly propertyKey: string;
  readonly operator: 'EQUALS' | 'NOT_EQUALS' | 'CONTAINS' | 'GREATER_THAN' | 'LESS_THAN' | 'IN';
  readonly propertyValue: any;
}

export interface GraphFilter {
  readonly propertyFilters: PropertyFilter[];
  readonly minStrengthScore?: number;
  readonly minConfidenceScore?: number;
  readonly createdAfter?: Date;
}

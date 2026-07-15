export interface MemoryQuery {
  readonly queryText?: string;
  readonly categoryScope?: 'ORGANIZATIONAL' | 'CUSTOMER' | 'EMPLOYEE' | 'PROJECT' | 'WORKFLOW' | 'DECISION' | 'CONVERSATION';
  readonly tagFilters?: string[];
  readonly minRelevanceScoreThreshold?: number; // 0.0 - 1.0 boundary
  readonly createdAfter?: Date;
  readonly createdBefore?: Date;
  readonly maxResultLimit: number;
}

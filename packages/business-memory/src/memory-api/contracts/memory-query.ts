export enum MemoryQueryType {
  EXECUTIVE = 'EXECUTIVE',
  CUSTOMER = 'CUSTOMER',
  ORGANIZATION = 'ORGANIZATION',
  PRODUCT = 'PRODUCT',
  STRATEGY = 'STRATEGY',
  DECISION = 'DECISION',
  LEARNING = 'LEARNING'
}

export interface BaseMemoryQuery {
  readonly queryId: string;
  readonly tenantId: string;
  readonly queryType: MemoryQueryType;
  readonly filterCriteria: Record<string, any>;
  readonly limit?: number;
}

export interface ExecutiveQuery extends BaseMemoryQuery {
  readonly queryType: MemoryQueryType.EXECUTIVE;
  readonly targetExecutiveRoleId: string;
}

export interface CustomerQuery extends BaseMemoryQuery {
  readonly queryType: MemoryQueryType.CUSTOMER;
  readonly customerId: string;
}

export interface OrganizationQuery extends BaseMemoryQuery {
  readonly queryType: MemoryQueryType.ORGANIZATION;
  readonly departmentId?: string;
}

export interface ProductQuery extends BaseMemoryQuery {
  readonly queryType: MemoryQueryType.PRODUCT;
  readonly productCapabilityId: string;
}

export interface StrategyQuery extends BaseMemoryQuery {
  readonly queryType: MemoryQueryType.STRATEGY;
  readonly goalId?: string;
}

export interface DecisionQuery extends BaseMemoryQuery {
  readonly queryType: MemoryQueryType.DECISION;
  readonly decisionId?: string;
}

export interface LearningQuery extends BaseMemoryQuery {
  readonly queryType: MemoryQueryType.LEARNING;
  readonly learningDomain?: string;
}

export type MemoryQuery =
  | ExecutiveQuery
  | CustomerQuery
  | OrganizationQuery
  | ProductQuery
  | StrategyQuery
  | DecisionQuery
  | LearningQuery;

export enum ContextScopeType {
  EXECUTIVE = 'EXECUTIVE',
  DEPARTMENT = 'DEPARTMENT',
  ORGANIZATION = 'ORGANIZATION',
  CUSTOMER = 'CUSTOMER',
  PRODUCT = 'PRODUCT'
}

export interface ContextScope {
  readonly type: ContextScopeType;
  readonly scopeValue: string; // e.g., 'boardroom', 'finance', 'acme-corp'
  readonly restrictionLevel: 'PUBLIC' | 'RESTRICTED' | 'CONFIDENTIAL' | 'SECRET';
}

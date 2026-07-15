export type MarketplaceCategoryCode =
  | 'DIGITAL_EMPLOYEE'
  | 'SKILL_PACK'
  | 'KNOWLEDGE_PACK'
  | 'DEPARTMENT_PACK'
  | 'INDUSTRY_PACK'
  | 'WORKFLOW_PACK'
  | 'POLICY_PACK'
  | 'DASHBOARD_PACK';

export interface Category {
  readonly code: MarketplaceCategoryCode;
  readonly displayName: string;
  readonly description: string;
  readonly iconUri?: string;
}

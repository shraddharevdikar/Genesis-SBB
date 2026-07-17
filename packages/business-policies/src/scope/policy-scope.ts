export type PolicyScopeTypeCode =
  | 'ORGANIZATION_WIDE'
  | 'BUSINESS_UNIT_LEVEL'
  | 'DEPARTMENT_SPECIFIC'
  | 'TEAM_LEVEL'
  | 'ROLE_SPECIFIC'
  | 'PROCESS_SPECIFIC'
  | 'WORKFLOW_SPECIFIC'
  | 'AI_AGENT_GOVERNED';

export interface PolicyScope {
  readonly scopeId: string;
  readonly typeCode: PolicyScopeTypeCode;
  readonly filterTagsCsvText?: string; // tags used to match target attributes
  readonly targetElementIdentifiersList: string[]; // references of targeted elements (e.g. ['ROLE-CEO', 'DEP-FINANCE'])
}

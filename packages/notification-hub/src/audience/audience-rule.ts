export interface AudienceRule {
  readonly ruleId: string;
  readonly tenantId: string;
  readonly name: string;
  readonly description?: string;
  readonly targetType: 'INDIVIDUAL' | 'ROLE' | 'DEPARTMENT' | 'ORGANIZATION' | 'TEAM' | 'DYNAMIC';
  readonly matchCriteria: Array<{
    readonly attribute: string; // e.g. "roleId", "departmentId", "region"
    readonly operator: 'EQUALS' | 'CONTAINS' | 'IN_LIST' | 'GREATER_THAN';
    readonly values: string[];
  }>;
  readonly isActive: boolean;
}

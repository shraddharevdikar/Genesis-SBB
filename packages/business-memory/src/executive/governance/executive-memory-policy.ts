export interface ExecutiveMemoryPolicy {
  readonly policyId: string;
  readonly tenantId: string;
  readonly policyName: string;
  readonly isExecutiveSharingEnabled: boolean;
  readonly allowedExecutiveRoles: string[]; // roles permitted to read/write executive memory
  readonly visibilityRestrictions: 'COUNCIL_ONLY' | 'DEPARTMENT_WIDE' | 'PUBLIC';
  readonly requiresDoubleSignoffToArchive: boolean;
  readonly isEnforced: boolean;
  readonly updatedAt: Date;
}

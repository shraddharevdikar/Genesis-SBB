export interface StrategicInitiative {
  readonly initiativeId: string;
  readonly tenantId: string;
  readonly title: string; // e.g. "Global Expansion Phase 1", "SaaS Platform Modernization"
  readonly scopeDescription: string;
  readonly strategicPillar: string;
  readonly ownerRoleId: string; // references OrganizationalRole
  readonly allocatedBudgetUSD: number;
  readonly estimatedCompletionDate: Date;
  readonly currentStatus: 'NOT_STARTED' | 'FEASIBILITY' | 'ACTIVE' | 'ON_HOLD' | 'COMPLETED' | 'CANCELLED';
  readonly progressPercentage: number;
}

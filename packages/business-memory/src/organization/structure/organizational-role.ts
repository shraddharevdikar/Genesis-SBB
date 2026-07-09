export interface OrganizationalRole {
  readonly roleId: string;
  readonly tenantId: string;
  readonly title: string; // e.g. "Senior Software Architect"
  readonly jobCode: string;
  readonly bandTier: 'EXECUTIVE' | 'DIRECTOR' | 'MANAGER' | 'INDIVIDUAL_CONTRIBUTOR' | 'CONTRACTOR';
  readonly reportsToRoleId?: string; // organizational hierarchical reporting line
  readonly departmentId: string;
  readonly isCriticalPosition: boolean;
  readonly averageAnnualCompensationUSD: number;
}

export interface Department {
  readonly departmentId: string;
  readonly businessUnitId: string;
  readonly name: string; // e.g., "Engineering", "Marketing"
  readonly costCenterCode: string;
  readonly leaderRoleId: string; // references OrganizationalRole
  readonly parentDepartmentId?: string; // nested hierarchical structure
  readonly subDepartmentsCount: number;
}

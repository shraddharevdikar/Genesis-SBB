export interface BusinessUnit {
  readonly unitId: string;
  readonly tenantId: string;
  readonly name: string; // e.g. "Enterprise", "Consumer"
  readonly executiveLeaderRoleId: string; // references OrganizationalRole
  readonly missionStatement?: string;
  readonly annualBudgetUSD: number;
  readonly headcountCount: number;
}

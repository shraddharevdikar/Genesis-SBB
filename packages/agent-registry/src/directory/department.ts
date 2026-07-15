export interface Department {
  readonly departmentId: string;
  readonly parentUnitId: string; // References OrganizationUnit
  readonly code: string; // e.g. "SBB-FIN-AUDIT"
  readonly name: string; // e.g. "Financial Audit & Settlement"
  readonly costCenter: string; // e.g. "CC-FIN-781"
}

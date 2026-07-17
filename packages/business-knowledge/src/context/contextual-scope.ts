export interface ContextualScope {
  readonly organizationUnitIdString?: string;
  readonly departmentIdString?: string;
  readonly workflowIdString?: string;
  readonly customerIdString?: string;
  readonly geographicRegionCode?: string; // e.g. "APAC", "EMEA"
  readonly validFromDate?: Date;
  readonly validToDate?: Date;
}

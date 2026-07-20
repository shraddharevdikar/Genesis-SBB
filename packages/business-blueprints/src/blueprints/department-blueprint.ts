import { BusinessBlueprint } from './business-blueprint.js';

export interface DepartmentBlueprint extends BusinessBlueprint {
  readonly targetDepartmentIdentifier: string; // e.g. "DEP-FINANCE" or "DEP-MARKETING"
  readonly boundOperatorRoleIdsList: string[];
  readonly requiresExternalIntegrationFlag: boolean;
}

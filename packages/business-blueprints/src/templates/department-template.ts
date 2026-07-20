import { BusinessTemplate } from './business-template.js';

export interface DepartmentTemplate extends BusinessTemplate {
  readonly standardSbbDepartmentCode: string; // e.g. "DEP-FINANCE"
  readonly defaultHeadcountCapacityCount: number;
  readonly defaultOperatingRoleIdsList: string[]; // e.g. ["ROLE-CFO", "ROLE-CONTROLLER"]
  readonly mandatorySbbCapabilityCodesList: string[];
}

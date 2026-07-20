import { BusinessBlueprint } from './business-blueprint.js';

export interface OrganizationBlueprint extends BusinessBlueprint {
  readonly targetEnterpriseCorporateCode: string; // e.g. "SBB-GLOBAL"
  readonly defaultSubsidiaryCodesList: string[]; // e.g. ["CH-CORP", "EU-CORP"]
  readonly minimumMandatoryDepartmentsCount: number;
}

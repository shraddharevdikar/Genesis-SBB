import { BusinessBlueprint } from './business-blueprint.js';

export interface OperatingModel extends BusinessBlueprint {
  readonly standardIndustryVerticalName: string; // e.g. "SAAS_ENTERPRISE" or "RAIL_TRANSPORT"
  readonly targetOperatingEcosystemCode: string; // e.g. "BOSF-ECOSYSTEM-V3"
  readonly maximumTenantDeploymentsLimit: number;
  readonly isFederatedModelFlag: boolean;
}

import { BusinessRole } from './business-role.js';

export interface ExecutiveRole {
  readonly baseRoleDetails: BusinessRole;
  readonly hasBoardRepresentationSeat: boolean;
  readonly microManagementOptOutAuthorized: boolean;
  readonly criticalDelegationOverridePowerEnabled: boolean;
  readonly directReportsCountLimit: number;
}

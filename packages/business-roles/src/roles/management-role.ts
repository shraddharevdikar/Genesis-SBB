import { BusinessRole } from './business-role.js';

export interface ManagementRole {
  readonly baseRoleDetails: BusinessRole;
  readonly managedDivisionIdString: string;
  readonly assignedCostCenterCode: string;
  readonly supportsAutonomousRosterMutation: boolean;
  readonly mandatorySyncIntervalWeeks: number;
}

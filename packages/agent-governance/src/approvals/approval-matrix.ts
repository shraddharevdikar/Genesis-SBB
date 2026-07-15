import { ApprovalRule } from './approval-rule.js';

export interface ApprovalMatrix {
  readonly matrixId: string;
  readonly tenantId: string;
  readonly scopeName: string; // e.g., "SBB_MAINTENANCE_FLEET_HQ"
  readonly rulesList: ApprovalRule[];
  readonly lastModifiedAt: Date;
  readonly isSystemDefault: boolean;
}

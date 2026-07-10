import { TwinState } from './twin-state.js';

export interface TwinSnapshot {
  readonly snapshotId: string;
  readonly tenantId: string;
  readonly label: string; // e.g. "Q2_Closing", "Post_Reorg"
  readonly description?: string;
  readonly timestamp: Date;
  readonly state: TwinState;
  readonly createdByRoleId: string;
  readonly hash: string;
  readonly isLocked: boolean;
}

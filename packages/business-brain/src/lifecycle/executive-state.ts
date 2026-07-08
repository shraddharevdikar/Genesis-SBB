import { ExecutiveRole } from '../core/contracts/executive-role.js';
import { ExecutiveStatus } from './executive-status.js';

export interface ExecutiveState {
  readonly role: ExecutiveRole;
  readonly status: ExecutiveStatus;
  readonly activeTaskIds: string[];
  readonly lastActiveAt: Date;
  readonly version: number;
}

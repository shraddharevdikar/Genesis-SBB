import { ExecutiveRole } from '../core/contracts/executive-role.js';

export interface ExecutiveActivatedEvent {
  readonly eventId: string;
  readonly role: ExecutiveRole;
  readonly tenantId: string;
  readonly timestamp: Date;
  readonly version: number;
}

import { RuntimeId } from '../identity/runtime-id.js';

export interface RuntimeStoppedEvent {
  readonly eventId: string;
  readonly runtimeId: RuntimeId;
  readonly tenantId: string;
  readonly stopReason: 'SHUTDOWN' | 'CRASH' | 'UPGRADE';
  readonly stoppedByRoleId: string;
  readonly timestamp: Date;
}

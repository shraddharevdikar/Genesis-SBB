import { RuntimeId } from '../identity/runtime-id.js';

export interface RuntimeStartedEvent {
  readonly eventId: string;
  readonly runtimeId: RuntimeId;
  readonly tenantId: string;
  readonly startedByRoleId: string;
  readonly timestamp: Date;
}

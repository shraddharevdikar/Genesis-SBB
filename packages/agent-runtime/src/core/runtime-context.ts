import { RuntimeId } from '../identity/runtime-id.js';

export interface RuntimeContext {
  readonly runtimeId: RuntimeId;
  readonly tenantId: string;
  readonly correlationId: string;
  readonly traceId: string;
  readonly initiatedByRoleId: string; // The SBB manager or team supervisor role
  readonly clientIp?: string;
  readonly baggage: Record<string, string>;
  readonly timestamp: Date;
}

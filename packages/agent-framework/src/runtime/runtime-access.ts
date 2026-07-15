import { RuntimeCapabilities } from './runtime-capabilities.js';

export interface RuntimeAccess {
  readonly accessId: string;
  readonly agentId: string;
  readonly tenantId: string;
  readonly allowedEngineCapabilities: RuntimeCapabilities[];
  readonly maxApiPayloadSizeBytes: number;
  readonly isAllowedOutsideOfficeHours: boolean;
  readonly rateLimitPerMinute: number;
}

import { RuntimeId } from '../identity/runtime-id.js';

export interface RuntimeContext {
  readonly runtimeId: RuntimeId;
  readonly tenantId: string;
  readonly correlationId: string;
  readonly initiatorRoleId: string;
  readonly bypassSecurityGate?: boolean;
  readonly environment: 'DEVELOPMENT' | 'STAGING' | 'PRODUCTION';
  readonly executionTimeoutMs: number;
}

import { RuntimeId } from '../identity/runtime-id.js';

export interface RuntimeHealth {
  readonly healthId: string;
  readonly runtimeId: RuntimeId;
  readonly tenantId: string;
  readonly availabilityStatus: 'AVAILABLE' | 'DEGRADED' | 'UNAVAILABLE';
  readonly errorRatePercentage: number;
  readonly networkLatencyMs: number;
  readonly activeThreadCount: number;
  readonly measuredAt: Date;
}

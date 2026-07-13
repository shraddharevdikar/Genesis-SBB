import { RuntimeId } from '../identity/runtime-id.js';

export interface RuntimeState {
  readonly runtimeId: RuntimeId;
  readonly tenantId: string;
  readonly status: 'STARTING' | 'RUNNING' | 'DEGRADED' | 'STOPPING' | 'OFFLINE';
  readonly activeOperationsCount: number;
  readonly systemLoadPercentage: number;
  readonly memoryAllocatedBytes: number;
  readonly lastHeartbeatReceivedAt: Date;
}

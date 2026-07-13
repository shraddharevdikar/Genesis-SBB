import { RuntimeId } from '../identity/runtime-id.js';

export interface RuntimeCapacity {
  readonly capacityId: string;
  readonly runtimeId: RuntimeId;
  readonly tenantId: string;
  readonly totalMemoryBytes: number;
  readonly usedMemoryBytes: number;
  readonly allocatedCpuCores: number;
  readonly averageCpuUtilization: number;
  readonly backlogQueueSize: number;
  readonly isThrottlingActive: boolean;
  readonly measuredAt: Date;
}

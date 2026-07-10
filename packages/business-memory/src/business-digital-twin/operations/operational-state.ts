import { CapacityState } from './capacity-state.js';

export interface OperationalMetric {
  readonly name: string;
  readonly value: number;
  readonly unit: string;
  readonly status: 'NORMAL' | 'WARNING' | 'CRITICAL';
}

export interface OperationalState {
  readonly processEfficiencyScore: number; // 0 to 100
  readonly primaryCoreProcessIds: string[];
  readonly coreOperationalMetrics: OperationalMetric[];
  readonly aggregateCapacity: CapacityState;
  readonly outstandingCriticalIncidentsCount: number;
}

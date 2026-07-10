export interface ResourceCapacity {
  readonly resourceType: 'COMPUTE' | 'STORAGE' | 'NETWORK_BANDWIDTH' | 'HUMAN_HOURS' | 'FACILITY_DESKS';
  readonly allocatedUnitName: string; // e.g. "Cores", "TB", "FTE_Hours"
  readonly limitValue: number;
  readonly consumedValue: number;
  readonly utilizationPercent: number; // (consumedValue/limitValue)*100
}

export interface CapacityState {
  readonly resources: ResourceCapacity[];
  readonly bottleneckIdentified: boolean;
  readonly bottleneckSummary?: string;
  readonly overallSystemUtilizationPercent: number;
}

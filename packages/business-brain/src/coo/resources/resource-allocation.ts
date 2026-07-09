export interface ResourceAllocation {
  readonly allocationId: string;
  readonly teamName: string;
  readonly assignedFTECount: number; // Full-Time Equivalent count
  readonly allocatedCapacityPercent: number; // e.g. 0.0 to 1.0 or 0 to 100
  readonly activityOrProject: string;
  readonly startDate: Date;
  readonly endDate: Date;
}

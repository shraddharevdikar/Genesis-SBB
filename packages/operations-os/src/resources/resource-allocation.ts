export interface ResourceAllocation {
  readonly allocationId: string;
  readonly uniqueAllocationCode: string; // e.g. "ALC-2026-ENG-42"
  readonly associatedResourceIdString: string;
  readonly targetProjectIdString?: string;
  readonly targetWorkOrderIdString?: string;
  readonly allocationRatioDecimal: number; // e.g. 0.50 (for 50% allocation)
  readonly scheduledStartDate: Date;
  readonly scheduledEndDate: Date;
  readonly approvedByOperatorRoleId: string;
  readonly createdAt: Date;
}

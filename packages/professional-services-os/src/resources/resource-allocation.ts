export type AllocationStatusCode = 'PROPOSED_RESERVED' | 'SOFT_BOOKED_TENTATIVE' | 'HARD_BOOKED_CONFIRMED' | 'RELEASED_COMPLETED';

export interface ResourceAllocation {
  readonly allocationId: string;
  readonly uniqueAllocationCode: string; // e.g. "ALL-2026-CLOUD-CON1"
  readonly associatedConsultantIdString: string; // Links to Consultant
  readonly associatedProjectIdString: string; // Links to Project
  readonly roleOnProjectText: string; // e.g. "Lead Solution Architect"
  readonly allocationStartDate: Date;
  readonly allocationEndDate: Date;
  readonly allocationFtePercentageDecimal: number; // e.g. 1.0 (Full Time), 0.5 (Half Time)
  readonly standardHourlyBillingRateOverrideAmount?: number; // Custom project rate override
  readonly allocationStatus: AllocationStatusCode;
  readonly authorizedByStaffRoleIdString: string; // Resource Manager (HROS)
  readonly lastModifiedAt: Date;
}

export interface RoomAllocation {
  readonly allocationId: string;
  readonly associatedReservationIdString: string;
  readonly allocatedRoomIdString: string;
  readonly allocationStartTimestamp: Date;
  readonly allocationEndTimestamp: Date;
  readonly allocationLockActiveFlag: boolean; // Protects allocation from being over-ridden
  readonly lockExpiresAt?: Date; // Temp hold on room assignment during front desk queueing
  readonly assignedByOperatorIdString: string;
  readonly assignmentOverrideAuthorizedFlag: boolean; // Overrides dirty statuses or high tier upgrades
  readonly allocationNotesText?: string;
  readonly allocatedAt: Date;
}

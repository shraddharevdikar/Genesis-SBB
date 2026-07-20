export interface HealthcareBed {
  readonly bedId: string;
  readonly uniqueBedCode: string; // e.g. "BED-3F-E101"
  readonly associatedWardIdString: string;
  readonly bedLabelString: string; // e.g. "Room 101, Bed A"
  readonly equippedWithMechanicalVentilatorFlag: boolean;
  readonly equippedWithOxygenInletFlag: boolean;
  readonly currentStatus: 'VACANT_READY' | 'OCCUPIED' | 'DIRTY_PENDING_CLEANING' | 'MAINTENANCE_OUT_OF_SERVICE';
  readonly associatedPatientIdString?: string; // Current occupant patient ID
}

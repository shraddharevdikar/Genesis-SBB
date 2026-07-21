export type MaintenanceCategoryCode =
  | 'HVAC_AIR_CON'
  | 'PLUMBING_WATER'
  | 'ELECTRICAL_LIGHTING'
  | 'FURNITURE_FIXTURE_DAMAGE'
  | 'TELECOMMUNICATION_WIFI_TV'
  | 'PHYSICAL_STRUCTURE_LOCK';

export interface MaintenanceRequest {
  readonly maintenanceRequestId: string;
  readonly uniqueRequestCode: string; // e.g. "MNT-ENG-2026-0042"
  readonly associatedRoomIdString?: string; // Null if it's public lobby / gym
  readonly associatedPropertyIdString: string;
  readonly categoryCode: MaintenanceCategoryCode;
  readonly detailedDescriptionText: string;
  readonly reportedByStaffRoleIdString: string;
  readonly assignedTechnicianStaffRoleIdString?: string;
  readonly partsRequiredJSON?: string; // Links to OperationsOS Asset/Inventory
  readonly estimatedCostAmount: number; // Links to FinanceOS budget
  readonly actualCostAmount?: number;
  readonly resolutionNotesText?: string;
  readonly requestPriorityCode: 'URGENT_SAFETY_RISK' | 'HIGH' | 'MEDIUM' | 'LOW';
  readonly currentStatus: 'REPORTED' | 'IN_PROGRESS' | 'WAITING_FOR_PARTS' | 'RESOLVED' | 'CANCELLED';
  readonly reportedAt: Date;
  readonly resolvedAt?: Date;
}

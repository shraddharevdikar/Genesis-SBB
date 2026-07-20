export interface MaintenanceWorkOrder {
  readonly workOrderId: string;
  readonly uniqueWorkOrderCode: string; // e.g. "MNT-WO-2026-9442"
  readonly targetMachineIdString: string;
  readonly classification: 'PREVENTIVE_ROUTINE' | 'UNPLANNED_BREAKDOWN' | 'CALIBRATION' | 'SAFETY_AUDIT';
  readonly severityLevel: 'LOW_ROUTINE' | 'MEDIUM_URGENT' | 'HIGH_CRITICAL_BREAKDOWN';
  readonly problemStatementSummary: string; // e.g. "Hydraulic pressure failure on main stamping cylinder"
  readonly resolutionDetailsText?: string;
  readonly assignedTechnicianStaffRoleIdString: string; // Links to HROS / Role
  readonly sparePartsUsedProductIdsList: string[]; // Links to spare parts products
  readonly actualRepairDurationMinutesCount: number;
  readonly costChargedAmount: number;
  readonly currencyCode: string;
  readonly status: 'SUBMITTED' | 'SCHEDULED' | 'IN_REPAIR' | 'PENDING_PARTS' | 'COMPLETED_VERIFIED' | 'CANCELLED';
  readonly submittedAt: Date;
  readonly resolvedAt?: Date;
}

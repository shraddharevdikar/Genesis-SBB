export type MaintenanceTypeCode =
  | 'PREVENTIVE_ROUTINE'
  | 'CORRECTIVE_REPAIR'
  | 'CALIBRATION_STANDARD_CHECK'
  | 'EMERGENCY_PATCH';

export interface MaintenancePlan {
  readonly planId: string;
  readonly uniquePlanCode: string; // e.g. "MNT-SERVER-R4-YEARLY"
  readonly targetAssetIdString: string;
  readonly maintenanceType: MaintenanceTypeCode;
  readonly intervalDaysCount?: number; // Periodic frequency
  readonly descriptionNotes: string;
  readonly standardProcedureDocURI?: string;
  readonly estimatedMaintenanceMinutesCount: number;
  readonly nextScheduledDate: Date;
  readonly lastCompletedDate?: Date;
  readonly activeFlag: boolean;
}

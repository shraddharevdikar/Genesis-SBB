export interface MaintenanceWindow {
  readonly maintenanceWindowId: string;
  readonly tenantId: string;
  readonly name: string;
  readonly startAt: Date;
  readonly endAt: Date;
  readonly allowCrucialJobsToBypass: boolean;
  readonly suspendRegularSchedules: boolean;
  readonly description?: string;
}

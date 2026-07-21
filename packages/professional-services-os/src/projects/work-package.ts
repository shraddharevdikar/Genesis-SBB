export interface WorkPackage {
  readonly workPackageId: string;
  readonly uniqueWorkPackageCode: string; // e.g. "WPK-CLOUD-ACME-01-WP1"
  readonly associatedProjectIdString: string; // Links to Project
  readonly workPackageTitleString: string;
  readonly scopeInclusionsText: string;
  readonly scopeExclusionsText: string;
  readonly plannedEffortPersonDaysCount: number; // Estimated staffing volume
  readonly actualEffortSpentPersonDaysCount: number;
  readonly activeStatusFlag: boolean;
  readonly leadConsultantStaffRoleIdString?: string; // Lead consultant (HROS)
  readonly lastModifiedAt: Date;
}

export interface ManagerReference {
  readonly managerId: string; // ID of the supervising human employee or role
  readonly fullName: string;
  readonly roleId: string; // Supervising corporate role id (e.g. "SBB_LEAD_AUDITOR")
  readonly email: string;
}

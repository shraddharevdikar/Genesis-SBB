export interface RegistryPolicy {
  readonly policyId: string;
  readonly tenantId: string;
  readonly requireManagerSignOffForRegistration: boolean;
  readonly requireComplianceAuditOnOnboarding: boolean;
  readonly maxAgentsPerDepartmentLimit: number;
  readonly allowedCertificationLevels: string[];
  readonly lastModifiedByRoleId: string;
  readonly lastModifiedAt: Date;
}

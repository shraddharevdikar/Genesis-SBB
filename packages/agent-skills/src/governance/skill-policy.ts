export interface SkillPolicy {
  readonly policyId: string;
  readonly tenantId: string;
  readonly allowedSkillCategories: string[];
  readonly requireDualSupervisorSignoffForRestricted: boolean;
  readonly automaticAuditingEnabled: boolean;
  readonly maxSkillsPerAgentCeiling: number;
  readonly lastModifiedAt: Date;
}

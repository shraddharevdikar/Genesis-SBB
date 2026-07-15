export interface SkillContext {
  readonly tenantId: string;
  readonly traceId: string;
  readonly correlationId: string;
  readonly performedByRoleId: string; // SBB Compliance or Specialist Manager committing changes
  readonly timestamp: Date;
}

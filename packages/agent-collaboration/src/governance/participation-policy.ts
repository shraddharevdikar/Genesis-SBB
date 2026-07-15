export interface ParticipationPolicy {
  readonly policyId: string;
  readonly tenantId: string;
  readonly allowedParticipantRoleTypesList: string[]; // e.g. ["DIGITAL_EMPLOYEE", "HUMAN_OPERATOR"]
  readonly minimumSkillsProficiencyScoreRequired: number; // e.g. >= 3 (Senior/Expert)
  readonly complianceConsentRequired: boolean;
  readonly lastModifiedAt: Date;
}

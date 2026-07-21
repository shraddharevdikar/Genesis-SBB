export type SkillProficiencyLevel = 'NOVICE_L1' | 'COMPETENT_L2' | 'ADVANCED_L3' | 'EXPERT_MASTER_L4';

export interface ConsultantSkillRow {
  readonly skillIdString: string;
  readonly skillNameString: string; // e.g. "Google Cloud Architecture", "PostgreSQL tuning"
  readonly skillCategoryText: string; // e.g. "Software Engineering", "Strategy Consulting"
  readonly proficiency: SkillProficiencyLevel;
  readonly verifiedFlag: boolean; // Skill validated by practice leadership reviews
  readonly certificationReferenceString?: string;
  readonly lastAssessmentDate: Date;
}

export interface ConsultantSkillsProfile {
  readonly profileId: string;
  readonly uniqueProfileCode: string;
  readonly associatedConsultantIdString: string; // Links to Consultant
  readonly coreExpertiseSummaryText: string;
  readonly skillsList: ConsultantSkillRow[];
  readonly lastModifiedAt: Date;
}

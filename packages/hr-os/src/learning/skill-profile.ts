export interface SkillRecord {
  readonly skillName: string; // e.g. "TYPESCRIPT", "FINANCIAL_MODELING"
  readonly categoryCode: 'TECHNICAL' | 'DOMAINS' | 'LEADERSHIP' | 'LANGUAGES';
  readonly proficiencyLevelNumeric: number; // e.g. 1 to 5
  readonly verifiedBySupervisorFlag: boolean;
  readonly verifiedByCertificationFlag: boolean;
  readonly lastAssessedAt: Date;
}

export interface SkillProfile {
  readonly profileId: string;
  readonly associatedEmployeeIdString: string;
  readonly skillsList: SkillRecord[];
  readonly dominantSkillCategory: string;
  readonly lastSelfUpdatedAt: Date;
}

export interface CompetencyRequirement {
  readonly competencyName: string; // e.g. "SYSTEMS_DESIGN" or "PEOPLE_LEADERSHIP"
  readonly minimumProficiencyLevelNumeric: number; // e.g., 1 to 5 (Novice to Expert)
  readonly standardDescriptionText: string;
}

export interface CompetencyModel {
  readonly modelId: string;
  readonly uniqueModelCode: string; // e.g. "CMP-SWE-L6"
  readonly targetRoleCodeString: string; // e.g., Senior Software Engineer (ROL-SWE-SR)
  readonly standardCompetenciesList: CompetencyRequirement[];
  readonly lastReviewedAt: Date;
}

export interface SkillGapItem {
  readonly department: string;
  readonly skillName: string;
  readonly requiredProficiencyLevel: number; // 1 to 5
  readonly actualProficiencyLevel: number; // 1 to 5
  readonly gapScore: number; // e.g. required - actual
  readonly affectedEmployeesCount: number;
}

export interface SkillGapAnalysis {
  readonly analysisId: string;
  readonly tenantId: string;
  readonly targetDepartment: string;
  readonly measuredAt: Date;
  readonly listedGaps: SkillGapItem[];
  readonly criticalGapsCount: number;
  readonly recommendationsList: string[];
}

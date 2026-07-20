export interface LearningModule {
  readonly moduleId: string;
  readonly titleString: string;
  readonly associatedSkillsAddedList: string[];
  readonly durationHoursCount: number;
  readonly isMandatoryFlag: boolean;
  readonly completedFlag: boolean;
  readonly scoreNumeric?: number; // e.g. quiz score
}

export interface LearningPlan {
  readonly planId: string;
  readonly uniquePlanCode: string; // e.g. "LRN-2026-EMP-041"
  readonly targetEmployeeIdString: string;
  readonly modulesList: LearningModule[];
  readonly aggregateHoursCompletedCount: number;
  readonly progressPercentageDecimal: number;
  readonly isOverdueFlag: boolean;
  readonly nextRequiredMilestoneDate?: Date;
  readonly lastModifiedAt: Date;
}

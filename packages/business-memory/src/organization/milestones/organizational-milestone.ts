export interface OrganizationalMilestone {
  readonly milestoneId: string;
  readonly title: string; // e.g. "Acquire Company X", "Rebrand launch"
  readonly description: string;
  readonly targetDate: Date;
  readonly achievedDate?: Date;
  readonly keyDeliverablesList: string[];
  readonly isCompleted: boolean;
  readonly confidenceScorePercent: number;
}

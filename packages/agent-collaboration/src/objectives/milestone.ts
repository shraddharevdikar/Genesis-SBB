export interface Milestone {
  readonly milestoneId: string;
  readonly title: string;
  readonly isCompleted: boolean;
  readonly dependencyMilestoneIdsList: string[]; // Prerequisite milestones
  readonly targetCompletionDate: Date;
  readonly completedAt?: Date;
}

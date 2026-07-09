export interface OrganizationalGoal {
  readonly goalId: string;
  readonly tenantId: string;
  readonly statement: string;
  readonly primaryStakeholderRoleIds: string[];
  readonly priorityTier: 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW';
  readonly targetDate: Date;
  readonly confidenceScore: number; // 0 to 100
  readonly isCompleted: boolean;
  readonly postMortemSummary?: string;
}

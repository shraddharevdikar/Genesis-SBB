export interface GoalProgress {
  readonly progressId: string;
  readonly measuredAt: Date;
  readonly progressPercentage: number; // 0 to 100
  readonly obstaclesFaced: string[];
  readonly remediationActions: string[];
  readonly currentStatusDescription: string;
}

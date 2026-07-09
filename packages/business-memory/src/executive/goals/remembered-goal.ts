import { GoalProgress } from './goal-progress.js';

export interface RememberedGoal {
  readonly goalId: string;
  readonly title: string;
  readonly description: string;
  readonly successCriteria: string[];
  readonly targetDate: Date;
  readonly progressHistory: GoalProgress[];
  readonly finalStatus: 'NOT_STARTED' | 'IN_PROGRESS' | 'ACHIEVED' | 'MISSED' | 'ABANDONED';
  readonly postMortemLearnings?: string[];
}

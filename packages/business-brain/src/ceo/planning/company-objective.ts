import { StrategicGoalCategory } from './strategic-goal.js';

export interface CompanyObjective {
  readonly id: string;
  readonly parentStrategicGoalId: string;
  readonly category: StrategicGoalCategory;
  readonly title: string;
  readonly description: string;
  readonly ownerRole: string;
  readonly targetCompletionDate: Date;
  readonly kpiName: string;
  readonly targetMetricValue: string | number;
  readonly currentMetricValue: string | number;
  readonly status: 'NOT_STARTED' | 'IN_PROGRESS' | 'ACHIEVED' | 'MISSED';
}

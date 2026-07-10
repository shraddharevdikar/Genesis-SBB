import { GoalState } from './goal-state.js';

export interface InitiativeProgress {
  readonly initiativeId: string;
  readonly name: string;
  readonly budgetUSD: number;
  readonly budgetConsumedUSD: number;
  readonly scheduleAdherence: 'ON_TIME' | 'DELAYED' | 'CRITICAL_PATH_BLOCKED';
  readonly deliverablesCompletedCount: number;
  readonly totalDeliverablesCount: number;
  readonly completionPercentage: number;
}

export interface InitiativeState {
  readonly initiativesCount: number;
  readonly activeInitiatives: InitiativeProgress[];
  readonly enterpriseGoals: GoalState[];
  readonly totalStrategyBudgetUSD: number;
}

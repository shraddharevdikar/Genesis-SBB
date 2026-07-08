import { DecisionEngineContext } from './decision-engine-context.js';

export enum DecisionSessionStatus {
  STARTED = 'STARTED',
  EVALUATING = 'EVALUATING',
  RECOMMENDED = 'RECOMMENDED',
  COMPLETED = 'COMPLETED',
  ESCALATED = 'ESCALATED'
}

export interface DecisionSession {
  readonly sessionId: string;
  readonly context: DecisionEngineContext;
  readonly status: DecisionSessionStatus;
  readonly targetDate: Date;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}

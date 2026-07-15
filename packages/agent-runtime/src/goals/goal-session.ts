import { SessionId } from '../identity/session-id.js';
import { Goal } from '@sbb/agent-framework';

export interface GoalSession {
  readonly goalSessionId: string;
  readonly runtimeSessionId: SessionId;
  readonly goal: Goal;
  readonly status: 'ACTIVE' | 'BLOCKED' | 'COMPLETED' | 'FAILED';
  readonly startedAt: Date;
  readonly completedAt?: Date;
  readonly blockersDescription?: string;
}

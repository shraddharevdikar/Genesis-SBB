import { SessionState } from './runtime-session.js';

export interface RuntimeState {
  readonly currentState: SessionState;
  readonly stepCursorIndex: number;
  readonly variables: Record<string, string | number | boolean>;
  readonly evaluationHistory: string[]; // List of executed decision references
  readonly updatedAt: Date;
}

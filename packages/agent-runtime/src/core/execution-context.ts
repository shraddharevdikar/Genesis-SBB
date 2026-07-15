import { RuntimeContext } from './runtime-context.js';
import { RuntimeState } from './runtime-state.js';

export interface ExecutionContext {
  readonly executionId: string;
  readonly context: RuntimeContext;
  readonly state: RuntimeState;
  readonly memoryBufferLimit: number;
  readonly maxTimeoutMs: number;
  readonly enableDeepTracing: boolean;
}

import { RuntimeContext } from '../core/runtime-context.js';

export interface RuntimeQuery {
  readonly queryId: string;
  readonly targetResource: string; // e.g. "SBB.WorkflowEngine.ActiveInstances"
  readonly filters: Record<string, any>;
  readonly limit?: number;
  readonly offset?: number;
  readonly context: RuntimeContext;
}

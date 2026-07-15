import { RuntimeContext } from './runtime-context.js';

export interface RuntimeRequest {
  readonly requestTarget: string; // e.g. "WorkflowService.StartWorkflow"
  readonly payload: Record<string, any>;
  readonly context: RuntimeContext;
}

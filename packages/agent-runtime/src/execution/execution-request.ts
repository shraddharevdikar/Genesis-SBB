import { RuntimeContext } from '../core/runtime-context.js';
import { ExecutionStep } from '../planning/execution-step.js';

export interface ExecutionRequest {
  readonly requestId: string;
  readonly context: RuntimeContext;
  readonly targetStep: ExecutionStep;
  readonly payloadInputSchema: string; // Dynamic parameter JSON mapping
  readonly allocatedMemoryKb: number;
}

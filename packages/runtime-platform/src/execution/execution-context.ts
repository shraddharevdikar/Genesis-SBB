import { RuntimeContext } from '../core/runtime-context.js';

export interface ExecutionContext {
  readonly executionId: string;
  readonly runtimeContext: RuntimeContext;
  readonly allocatedMemoryMb: number;
  readonly isSandboxed: boolean;
  readonly traceId: string;
}

import { RuntimeContext } from '../core/runtime-context.js';

export interface RuntimeCommand {
  readonly commandId: string;
  readonly name: string; // e.g. "CreateApprovalRequest"
  readonly payload: Record<string, any>;
  readonly context: RuntimeContext;
  readonly expectedResponseFormat?: string;
}

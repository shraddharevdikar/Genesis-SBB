import { RuntimeCommand } from '../contracts/runtime-command.js';
import { RuntimeQuery } from '../contracts/runtime-query.js';
import { RuntimeResult } from '../contracts/runtime-result.js';

export interface WorkflowService {
  startWorkflow(command: RuntimeCommand): Promise<RuntimeResult>;
  suspendWorkflow(command: RuntimeCommand): Promise<RuntimeResult>;
  resumeWorkflow(command: RuntimeCommand): Promise<RuntimeResult>;
  terminateWorkflow(command: RuntimeCommand): Promise<RuntimeResult>;
  getWorkflowStatus(query: RuntimeQuery): Promise<RuntimeResult>;
}

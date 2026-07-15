import { RuntimeCommand } from '../contracts/runtime-command.js';
import { RuntimeQuery } from '../contracts/runtime-query.js';
import { RuntimeResult } from '../contracts/runtime-result.js';

export interface TaskService {
  enqueueTask(command: RuntimeCommand): Promise<RuntimeResult>;
  claimTask(command: RuntimeCommand): Promise<RuntimeResult>;
  completeTask(command: RuntimeCommand): Promise<RuntimeResult>;
  failTask(command: RuntimeCommand): Promise<RuntimeResult>;
  getTaskDetails(query: RuntimeQuery): Promise<RuntimeResult>;
}

import { RuntimeCommand } from '../contracts/runtime-command.js';
import { RuntimeQuery } from '../contracts/runtime-query.js';
import { RuntimeResult } from '../contracts/runtime-result.js';

export interface SchedulingService {
  scheduleJob(command: RuntimeCommand): Promise<RuntimeResult>;
  cancelJob(command: RuntimeCommand): Promise<RuntimeResult>;
  triggerJobNow(command: RuntimeCommand): Promise<RuntimeResult>;
  getJobSchedule(query: RuntimeQuery): Promise<RuntimeResult>;
}

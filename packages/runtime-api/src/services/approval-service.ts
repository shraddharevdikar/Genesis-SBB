import { RuntimeCommand } from '../contracts/runtime-command.js';
import { RuntimeQuery } from '../contracts/runtime-query.js';
import { RuntimeResult } from '../contracts/runtime-result.js';

export interface ApprovalService {
  createApproval(command: RuntimeCommand): Promise<RuntimeResult>;
  approveStep(command: RuntimeCommand): Promise<RuntimeResult>;
  rejectStep(command: RuntimeCommand): Promise<RuntimeResult>;
  getApprovalStatus(query: RuntimeQuery): Promise<RuntimeResult>;
}

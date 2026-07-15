import { RuntimeCommand } from '../contracts/runtime-command.js';
import { RuntimeQuery } from '../contracts/runtime-query.js';
import { RuntimeResult } from '../contracts/runtime-result.js';

export interface PoliciesService {
  registerPolicy(command: RuntimeCommand): Promise<RuntimeResult>;
  evaluatePolicy(command: RuntimeCommand): Promise<RuntimeResult>;
  activatePolicy(command: RuntimeCommand): Promise<RuntimeResult>;
  deactivatePolicy(command: RuntimeCommand): Promise<RuntimeResult>;
  getPolicyDetails(query: RuntimeQuery): Promise<RuntimeResult>;
}

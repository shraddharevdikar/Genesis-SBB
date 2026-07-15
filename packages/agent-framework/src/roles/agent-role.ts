import { Responsibility } from './responsibility.js';
import { Objective } from './objective.js';

export interface AgentRole {
  readonly roleId: string;
  readonly name: string; // e.g. "SBB Settlement Auditor" or "SBB Dispatch Coordinator"
  readonly description: string;
  readonly objectives: Objective[];
  readonly responsibilities: Responsibility[];
}

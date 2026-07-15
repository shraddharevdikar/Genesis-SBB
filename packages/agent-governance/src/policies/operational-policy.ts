import { GovernancePolicy } from './governance-policy.js';

export interface OperationalPolicy extends GovernancePolicy {
  readonly category: 'OPERATIONAL';
  readonly maximumParallelExecutionTasksCount: number;
  readonly allowedSkillUrisList: string[]; // Set of skill codes this policy permits
  readonly automaticRolloverOnSystemOutage: boolean;
  readonly heartbeatTimeoutMinutes: number;
}

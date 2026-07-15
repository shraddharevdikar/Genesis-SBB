import { ExecutionProfile } from './execution-profile.js';

export interface RuntimeRequirement {
  readonly requirementId: string;
  readonly executionProfile: ExecutionProfile;
  readonly isSandboxedOnly: boolean;
  readonly timeoutMs: number;
}

import { AutonomyLevel } from './autonomy-level.js';
import { DecisionLimit } from './decision-limit.js';

export interface AutonomyProfile {
  readonly profileId: string;
  readonly targetAgentId: string; // Map to SBB Digital Employee Registry identifier
  readonly tenantId: string;
  readonly assignedAutonomyLevel: AutonomyLevel;
  readonly activeLimits: DecisionLimit;
  readonly isProfileLockedByPolicy: boolean;
  readonly lastModifiedAt: Date;
}

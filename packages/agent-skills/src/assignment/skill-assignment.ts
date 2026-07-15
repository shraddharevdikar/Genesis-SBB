import { SkillId } from '../identity/skill-id.js';
import { SkillVersionId } from '../identity/skill-version-id.js';
import { AgentId } from '@sbb/agent-framework';
import { ProficiencyLevel } from './proficiency-level.js';

export interface SkillAssignment {
  readonly assignmentId: string;
  readonly agentId: AgentId;
  readonly skillId: SkillId;
  readonly assignedVersionId: SkillVersionId;
  readonly proficiencyLevel: ProficiencyLevel;
  readonly isCertified: boolean;
  readonly certifiedByRoleId?: string;
  readonly certifiedAt?: Date;
  readonly assignedAt: Date;
  readonly expiresAt?: Date;
}

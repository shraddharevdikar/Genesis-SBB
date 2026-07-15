import { SkillId } from '../identity/skill-id.js';
import { SkillVersionId } from '../identity/skill-version-id.js';
import { AgentId } from '@sbb/agent-framework';

export interface SkillAssignedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly agentId: AgentId;
  readonly skillId: SkillId;
  readonly assignedVersionId: SkillVersionId;
  readonly proficiencyLevel: string;
  readonly assignedByRoleId: string;
  readonly timestamp: Date;
}

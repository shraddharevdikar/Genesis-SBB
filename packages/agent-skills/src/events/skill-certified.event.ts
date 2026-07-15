import { SkillId } from '../identity/skill-id.js';
import { AgentId } from '@sbb/agent-framework';

export interface SkillCertifiedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly agentId: AgentId;
  readonly skillId: SkillId;
  readonly certifiedByRoleId: string;
  readonly timestamp: Date;
}

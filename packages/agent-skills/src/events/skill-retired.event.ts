import { SkillId } from '../identity/skill-id.js';

export interface SkillRetiredEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly skillId: SkillId;
  readonly retirementReason: string;
  readonly retiredByRoleId: string;
  readonly timestamp: Date;
}

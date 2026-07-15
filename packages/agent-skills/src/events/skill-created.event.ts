import { SkillId } from '../identity/skill-id.js';
import { SkillVersionId } from '../identity/skill-version-id.js';

export interface SkillCreatedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly skillId: SkillId;
  readonly versionId: SkillVersionId;
  readonly category: string;
  readonly registeredByRoleId: string;
  readonly timestamp: Date;
}

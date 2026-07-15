import { SkillId } from '../identity/skill-id.js';
import { SkillVersionId } from '../identity/skill-version-id.js';

export interface SkillInstance {
  readonly instanceId: string;
  readonly skillId: SkillId;
  readonly activeVersionId: SkillVersionId;
  readonly tenantId: string;
  readonly configurationParameters: Record<string, string | number | boolean>;
  readonly isEnabled: boolean;
  readonly initializedAt: Date;
}

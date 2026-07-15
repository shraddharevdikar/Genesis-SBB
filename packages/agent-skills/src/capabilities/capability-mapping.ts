import { SkillId } from '../identity/skill-id.js';
import { CapabilityRequirement } from './capability-requirement.js';

export interface CapabilityMapping {
  readonly mappingId: string;
  readonly skillId: SkillId;
  readonly requiredCapabilities: CapabilityRequirement[];
  readonly lastValidatedAt: Date;
}

import { SkillId } from '../identity/skill-id.js';
import { ProficiencyLevel } from '../assignment/proficiency-level.js';

export interface PrerequisiteSkill {
  readonly prerequisiteId: string;
  readonly targetSkillId: SkillId;
  readonly requiredProficiency: ProficiencyLevel;
  readonly isMandatory: boolean;
}

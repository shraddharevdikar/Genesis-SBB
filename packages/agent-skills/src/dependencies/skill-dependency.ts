import { SkillId } from '../identity/skill-id.js';
import { PrerequisiteSkill } from './prerequisite-skill.js';

export interface SkillDependency {
  readonly dependencyId: string;
  readonly parentSkillId: SkillId;
  readonly prerequisiteSkills: PrerequisiteSkill[];
  readonly enforceStrictSequence: boolean; // Must prerequisite skills be certified prior?
  readonly updatedAt: Date;
}

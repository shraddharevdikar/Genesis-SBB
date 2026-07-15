import { Skill } from './skill.js';

export interface SkillGroup {
  readonly groupId: string;
  readonly name: string; // e.g. "Financial Extraction Skills"
  readonly description: string;
  readonly skills: Skill[];
}

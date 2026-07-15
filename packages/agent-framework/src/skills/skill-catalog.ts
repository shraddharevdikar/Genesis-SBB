import { Skill } from './skill.js';

export interface SkillCatalog {
  registerSkill(skill: Skill): void;
  getSkill(skillId: string): Skill | undefined;
  listSkillsByCategory(type: 'COGNITIVE' | 'OPERATIONAL' | 'ANALYTICAL' | 'COMMUNICATION'): Skill[];
}

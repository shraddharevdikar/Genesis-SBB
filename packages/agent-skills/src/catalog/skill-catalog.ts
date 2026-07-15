import { SkillDefinition } from '../core/skill-definition.js';
import { SkillCategoryType } from './skill-category.js';
import { SkillId } from '../identity/skill-id.js';

export interface SkillCatalog {
  readonly catalogId: string;
  readonly tenantId: string;
  readonly lastUpdatedAt: Date;

  /**
   * Finds all skills associated with a specific functional category.
   */
  listByCategory(tenantId: string, category: SkillCategoryType): Promise<SkillDefinition[]>;

  /**
   * Searches skill definitions by text queries on tags or names.
   */
  searchCatalog(tenantId: string, textQuery: string): Promise<SkillDefinition[]>;

  /**
   * Obtains a singular skill description.
   */
  getSkill(tenantId: string, skillId: SkillId): Promise<SkillDefinition | undefined>;
}

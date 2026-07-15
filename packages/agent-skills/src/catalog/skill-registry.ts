import { SkillDefinition } from '../core/skill-definition.js';

export interface SkillRegistryEntry {
  readonly registryRecordId: string;
  readonly tenantId: string;
  readonly definition: SkillDefinition;
  readonly approvedByRoleId: string;
  readonly isRestricted: boolean; // True if the skill requires multi-manager dual-signatures
  readonly addedAt: Date;
}

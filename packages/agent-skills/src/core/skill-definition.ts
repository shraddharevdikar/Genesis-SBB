import { SkillId } from '../identity/skill-id.js';
import { SkillVersionId } from '../identity/skill-version-id.js';

export interface SkillDefinition {
  readonly skillId: SkillId;
  readonly versionId: SkillVersionId;
  readonly name: string;
  readonly description: string;
  readonly category: string; // e.g., "financial-reconciliation" or "schedule-optimization"
  readonly tags: string[];
  readonly isDeprecated: boolean;
  readonly schemaInputJson: string; // JSON Schema for executing/mapping capabilities of this skill
  readonly schemaOutputJson: string; // JSON Schema for output result shapes of this skill
  readonly lastModifiedAt: Date;
}

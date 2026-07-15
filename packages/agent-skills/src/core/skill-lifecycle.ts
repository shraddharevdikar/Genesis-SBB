import { SkillDefinition } from './skill-definition.js';
import { SkillContext } from './skill-context.js';
import { SkillId } from '../identity/skill-id.js';

export interface SkillLifecycle {
  /**
   * Onboards a newly authored reusable enterprise skill template into the system catalog.
   */
  proposeSkill(
    tenantId: string,
    definition: SkillDefinition,
    context: SkillContext
  ): Promise<SkillDefinition>;

  /**
   * Verifies skill specification, checking compatibility against standard cognitive templates.
   */
  verifySkill(
    tenantId: string,
    skillId: SkillId,
    context: SkillContext
  ): Promise<{
    readonly isCompatible: boolean;
    readonly verifiedAt: Date;
    readonly compatibilityCheckPassed: boolean;
    readonly validationNotes?: string;
  }>;

  /**
   * Transitions a skill template to retired state, preventing new assignments.
   */
  retireSkill(
    tenantId: string,
    skillId: SkillId,
    reason: string,
    context: SkillContext
  ): Promise<void>;
}

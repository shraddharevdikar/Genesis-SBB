import { SkillId } from '../identity/skill-id.js';
import { SkillVersionId } from '../identity/skill-version-id.js';
import { SkillDefinition } from './skill-definition.js';
import { SkillContext } from './skill-context.js';
import { AgentId } from '@sbb/agent-framework';
import { SkillAssignment } from '../assignment/skill-assignment.js';
import { ProficiencyLevel } from '../assignment/proficiency-level.js';

export interface AgentSkills {
  /**
   * Registers a brand-new reusable business skill definition in the central enterprise repository.
   */
  registerSkill(
    tenantId: string,
    skill: SkillDefinition,
    context: SkillContext
  ): Promise<SkillDefinition>;

  /**
   * Assigns a versioned skill capability directly to an active Digital Employee registry record.
   */
  assignSkill(
    tenantId: string,
    agentId: AgentId,
    skillId: SkillId,
    versionId: SkillVersionId,
    proficiency: ProficiencyLevel,
    context: SkillContext
  ): Promise<SkillAssignment>;

  /**
   * Revokes an assigned skill from a digital employee, preventing further executions.
   */
  revokeSkill(
    tenantId: string,
    agentId: AgentId,
    skillId: SkillId,
    reason: string,
    context: SkillContext
  ): Promise<void>;

  /**
   * Validates if an agent possesses all requirements (capabilities, knowledge) to run a skill.
   */
  validateSkill(
    tenantId: string,
    agentId: AgentId,
    skillId: SkillId,
    versionId: SkillVersionId
  ): Promise<{
    readonly isValid: boolean;
    readonly missingPrerequisites: string[];
    readonly policyViolations: string[];
  }>;

  /**
   * Evaluates the active execution accuracy and proficiency of a digital employee performing a skill.
   */
  evaluateProficiency(
    tenantId: string,
    agentId: AgentId,
    skillId: SkillId
  ): Promise<ProficiencyLevel>;

  /**
   * Formalizes security/architectural certification of a skill assignment for critical operations.
   */
  certifySkill(
    tenantId: string,
    agentId: AgentId,
    skillId: SkillId,
    certifiedByRoleId: string,
    context: SkillContext
  ): Promise<SkillAssignment>;
}

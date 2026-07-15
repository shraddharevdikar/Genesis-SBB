import { AgentId } from '../identity/agent-id.js';
import { AgentContext } from './agent-context.js';
import { AgentInstance } from './agent-instance.js';
import { Goal } from '../goals/goal.js';
import { Skill } from '../skills/skill.js';
import { Capability } from '../capabilities/capability.js';
import { MemoryProfile } from '../memory/memory-profile.js';
import { RuntimeAccess } from '../runtime/runtime-access.js';

export interface EnterpriseAgent {
  /**
   * Transitions an agent instance state to active, ready to accept business goals.
   */
  activate(
    tenantId: string,
    agentId: AgentId,
    context: AgentContext
  ): Promise<AgentInstance>;

  /**
   * Safely suspends or stops an agent's execution tasks.
   */
  deactivate(
    tenantId: string,
    agentId: AgentId,
    reason: string,
    context: AgentContext
  ): Promise<AgentInstance>;

  /**
   * Triggers the autonomous or double-signature evaluation and execution of an enterprise Goal.
   */
  executeGoal(
    tenantId: string,
    agentId: AgentId,
    goal: Goal,
    context: AgentContext
  ): Promise<{
    readonly isSuccess: boolean;
    readonly resultSummary: string;
    readonly finalMetricsSnapshot: Record<string, number>;
  }>;

  /**
   * Dynamically loads a verified cognitive or operational skill into the agent registry.
   */
  acquireSkill(
    tenantId: string,
    agentId: AgentId,
    skill: Skill,
    context: AgentContext
  ): Promise<void>;

  /**
   * Asserts if the agent has acquired the technical capabilities to execute a target workload.
   */
  evaluateCapability(
    tenantId: string,
    agentId: AgentId,
    capability: Capability
  ): Promise<{ readonly hasCapability: boolean; readonly missingSkills: string[] }>;

  /**
   * Accesses short-term or long-term multi-tenant memory stores governed by privacy policies.
   */
  accessMemory(
    tenantId: string,
    agentId: AgentId,
    scope: 'SHORT_TERM' | 'LONG_TERM'
  ): Promise<MemoryProfile>;

  /**
   * Obtains a secure connection endpoint to interact with underlying Runtime Engines.
   */
  accessRuntime(
    tenantId: string,
    agentId: AgentId
  ): Promise<RuntimeAccess>;
}

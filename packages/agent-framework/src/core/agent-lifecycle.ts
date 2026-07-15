import { AgentId } from '../identity/agent-id.js';
import { AgentStatus } from '../health/agent-status.js';
import { AgentInstance } from './agent-instance.js';

export interface AgentLifecycle {
  /**
   * Spawns an active agent instance into the multi-tenant landscape.
   */
  provisionInstance(
    tenantId: string,
    agentId: AgentId,
    initialStatus?: AgentStatus
  ): Promise<AgentInstance>;

  /**
   * Suspends execution of an active agent instance.
   */
  suspendInstance(
    tenantId: string,
    instanceId: string,
    reason: string,
    operatorRoleId: string
  ): Promise<AgentInstance>;

  /**
   * Resumes execution of a suspended agent instance.
   */
  resumeInstance(
    tenantId: string,
    instanceId: string,
    reason: string,
    operatorRoleId: string
  ): Promise<AgentInstance>;

  /**
   * Permanently retires an agent instance from active operation.
   */
  terminateInstance(
    tenantId: string,
    instanceId: string,
    reason: string,
    operatorRoleId: string
  ): Promise<void>;
}

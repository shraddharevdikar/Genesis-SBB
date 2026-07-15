import { AgentId } from '../identity/agent-id.js';

export interface AgentContext {
  readonly agentId: AgentId;
  readonly tenantId: string;
  readonly traceId: string;
  readonly correlationId: string;
  readonly initiatedByRoleId: string; // SBB business or operations user role supervising the agent
  readonly executionTargetSystem?: string; // SBB Engine under target execution
  readonly clientIp?: string;
  readonly baggage: Record<string, string>;
  readonly timestamp: Date;
}

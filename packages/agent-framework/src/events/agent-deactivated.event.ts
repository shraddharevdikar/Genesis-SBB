import { AgentId } from '../identity/agent-id.js';

export interface AgentDeactivatedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly agentId: AgentId;
  readonly deactivatedByRoleId: string;
  readonly reason?: string;
  readonly timestamp: Date;
}

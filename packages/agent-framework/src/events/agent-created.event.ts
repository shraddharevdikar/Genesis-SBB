import { AgentId } from '../identity/agent-id.js';

export interface AgentCreatedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly agentId: AgentId;
  readonly name: string;
  readonly targetRoleId: string;
  readonly createdByRoleId: string;
  readonly timestamp: Date;
}

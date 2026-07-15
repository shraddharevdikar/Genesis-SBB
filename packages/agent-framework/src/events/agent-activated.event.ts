import { AgentId } from '../identity/agent-id.js';

export interface AgentActivatedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly agentId: AgentId;
  readonly activatedByRoleId: string;
  readonly reason?: string;
  readonly timestamp: Date;
}

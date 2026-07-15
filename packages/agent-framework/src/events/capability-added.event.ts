import { AgentId } from '../identity/agent-id.js';

export interface CapabilityAddedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly agentId: AgentId;
  readonly capabilityId: string;
  readonly addedByRoleId: string;
  readonly timestamp: Date;
}

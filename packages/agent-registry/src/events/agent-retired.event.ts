export interface AgentRetiredEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly agentId: string;
  readonly retirementReason: string;
  readonly retiredByRoleId: string;
  readonly timestamp: Date;
}

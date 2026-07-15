export interface AgentAssignedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly agentId: string;
  readonly previousDepartmentId?: string;
  readonly newDepartmentId: string;
  readonly previousManagerId?: string;
  readonly newManagerId: string;
  readonly assignedByRoleId: string;
  readonly timestamp: Date;
}

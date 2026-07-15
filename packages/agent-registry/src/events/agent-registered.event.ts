export interface AgentRegisteredEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly agentId: string;
  readonly employeeNumber: string;
  readonly departmentId: string;
  readonly registeredByRoleId: string;
  readonly timestamp: Date;
}

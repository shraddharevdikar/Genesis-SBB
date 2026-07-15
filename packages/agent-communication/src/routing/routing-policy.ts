export interface RoutingPolicy {
  readonly policyId: string;
  readonly tenantId: string;
  readonly autoForwardToSupervisors: boolean;
  readonly preferredChannelOrderList: string[];
  readonly fallbackSupervisorRoleId: string;
  readonly routingTimeoutMinutes: number;
  readonly lastModifiedAt: Date;
}

export interface RoutingProfile {
  readonly profileId: string;
  readonly tenantId: string;
  readonly supportedChannelsList: string[]; // e.g. ["SBB_COMPLIANCE_API", "SBB_MOBILE"]
  readonly maxParallelConversationsCeiling: number;
  readonly loadBalancingStrategy: 'LEAST_CONCURRENT' | 'ROUND_ROBIN' | 'ROLE_MATCH';
  readonly isOperational: boolean;
}

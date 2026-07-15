export interface MemoryContribution {
  readonly contributionId: string;
  readonly category: 'ORGANIZATIONAL' | 'CUSTOMER' | 'EMPLOYEE' | 'PROJECT' | 'WORKFLOW' | 'DECISION' | 'CONVERSATION';
  readonly scopeLabel: string; // e.g. "SBB_TRAFFIC_FLOW_CH"
  readonly payloadJson: string; // Structure of the contributed memory
  readonly tags: string[];
  readonly statedConfidenceScore: number; // 0.0 - 1.0 (how certain is the agent of this fact)
  readonly requiresSupervisorApproval: boolean;
}

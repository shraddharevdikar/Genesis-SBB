export interface DelegationNode {
  readonly stepNumber: number;
  readonly delegatorParticipantId: string; // The actor transferring authority
  readonly delegateeParticipantId: string; // The actor receiving authority
  readonly scopeOfDelegationText: string; // Dynamic description of authorized decisions
  readonly delegatedAt: Date;
  readonly expiresAt?: Date;
}

export interface DelegationChain {
  readonly chainId: string;
  readonly tenantId: string;
  readonly originalDecisionResourceId: string; // The target resource context
  readonly activeNodesList: DelegationNode[];
  readonly isChainValid: boolean;
}

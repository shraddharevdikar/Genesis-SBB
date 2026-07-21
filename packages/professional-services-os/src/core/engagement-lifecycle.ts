export type EngagementStepCode =
  | 'OPPORTUNITY_IDENTIFIED'
  | 'PROPOSAL_SUBMITTED'
  | 'SOW_CONTRACT_NEGOTIATION'
  | 'KICKOFF_INITIATED'
  | 'PLANNING_STAGED'
  | 'ACTIVE_DELIVERY'
  | 'PARTIALLY_DELIVERED'
  | 'QUALITY_REVIEW_PENDING'
  | 'DELIVERY_COMPLETED'
  | 'ENGAGEMENT_CLOSED'
  | 'ON_HOLD'
  | 'TERMINATED_ABRUPTLY';

export interface EngagementTransition {
  readonly transitionId: string;
  readonly uniqueTransitionCode: string;
  readonly associatedEngagementIdString: string;
  readonly previousStep: EngagementStepCode;
  readonly targetStep: EngagementStepCode;
  readonly transitionTriggeredByOperatorId: string;
  readonly transitionNotesText?: string;
  readonly transitionTimestamp: Date;
}

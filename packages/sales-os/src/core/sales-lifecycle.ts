export type LeadLifecycleState =
  | 'NEW'
  | 'CONTACTED'
  | 'NURTURING'
  | 'QUALIFIED'
  | 'UNQUALIFIED'
  | 'REJECTED';

export type OpportunityLifecycleState =
  | 'DISCOVERY'
  | 'QUALIFICATION'
  | 'PROPOSAL_QUOTATION'
  | 'NEGOTIATION'
  | 'CLOSED_WON'
  | 'CLOSED_LOST'
  | 'CLOSED_ABANDONED';

export type QuotationLifecycleState =
  | 'DRAFT'
  | 'INTERNAL_REVIEW'
  | 'SENT_TO_CLIENT'
  | 'ACCEPTED'
  | 'REJECTED'
  | 'EXPIRED'
  | 'REPLACED';

export interface SalesLifecycle {
  readonly currentLeadState: LeadLifecycleState;
  readonly currentOpportunityState?: OpportunityLifecycleState;
  readonly currentQuotationState?: QuotationLifecycleState;
  readonly lastStateTransitionAt: Date;
  readonly createdByOperatorRoleId: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
}

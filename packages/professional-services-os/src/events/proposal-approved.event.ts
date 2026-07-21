import { Proposal } from '../proposals/proposal.js';
import { ServicesContext } from '../core/services-context.js';

export interface ProposalApprovedEvent {
  readonly eventId: string;
  readonly eventName: 'PROPOSAL_APPROVED';
  readonly payload: {
    readonly proposalRecord: Proposal;
    readonly totalApprovedEstimateAmount: number;
    readonly clientSignatoryEmailText?: string;
  };
  readonly context: ServicesContext;
}

import { ExecutiveRole } from '../../core/contracts/executive-role.js';
import { ExecutiveContext } from '../../core/contracts/executive-context.js';

export interface CouncilMemberResponse {
  readonly responder: ExecutiveRole;
  readonly vote: 'APPROVE' | 'REJECT' | 'ABSTAIN';
  readonly feedbackNotes: string;
  readonly alternativeProposal?: string;
  readonly timestamp: Date;
}

export interface ExecutiveCouncilRequest {
  readonly councilRequestId: string;
  readonly context: ExecutiveContext;
  readonly title: string;
  readonly proposalDescription: string;
  readonly agendaItems: string[];
  readonly targetParticipants: ExecutiveRole[];
  readonly requiredQuorumCount: number;
  readonly responses: CouncilMemberResponse[];
  readonly deadline: Date;
}

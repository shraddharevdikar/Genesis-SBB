import { ExecutiveRole } from '../core/contracts/executive-role.js';

export interface CollaborationResponse {
  readonly requestId: string;
  readonly collaborator: ExecutiveRole;
  readonly isAgreed: boolean;
  readonly feedbackNotes: string;
  readonly alternativeProposal?: string;
  readonly timestamp: Date;
}

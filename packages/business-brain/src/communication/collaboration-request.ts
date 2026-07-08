import { ExecutiveRole } from '../core/contracts/executive-role.js';
import { ExecutiveContext } from '../core/contracts/executive-context.js';

export interface CollaborationRequest {
  readonly requestId: string;
  readonly initiator: ExecutiveRole;
  readonly targetCollaborator: ExecutiveRole;
  readonly topic: string;
  readonly proposal: string;
  readonly context: ExecutiveContext;
  readonly timestamp: Date;
}

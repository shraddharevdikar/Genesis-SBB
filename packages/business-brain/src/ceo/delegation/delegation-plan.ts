import { DelegationRequest } from './delegation-request.js';
import { ExecutiveAssignment } from './executive-assignment.js';

export interface DelegationPlan {
  readonly planId: string;
  readonly initiativeId: string;
  readonly title: string;
  readonly strategicIntent: string;
  readonly assignments: ExecutiveAssignment[];
  readonly explicitRequests: DelegationRequest[];
  readonly issuedAt: Date;
  readonly status: 'DRAFT' | 'ISSUED' | 'COMPLETED' | 'REVISED';
}

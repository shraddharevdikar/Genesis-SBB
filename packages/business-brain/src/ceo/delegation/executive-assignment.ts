import { ExecutiveRole } from '../../core/contracts/executive-role.js';

export interface ExecutiveAssignment {
  readonly assignmentId: string;
  readonly role: ExecutiveRole.CFO | ExecutiveRole.COO | ExecutiveRole.CTO | ExecutiveRole.CMO | ExecutiveRole.CRO | ExecutiveRole.CHRO;
  readonly targetObjectiveId: string;
  readonly scopeOfAuthority: string[];
  readonly deliverables: string[];
  readonly keyPerformanceIndicator: string;
}

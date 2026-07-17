import { DepartmentInstanceId } from '../identity/department-instance-id.js';

export interface WorkforceAssignment {
  readonly assignmentId: string;
  readonly parentDepartmentInstanceId: DepartmentInstanceId;
  readonly targetCapabilityCode: string;
  readonly assignedAgentProfileId?: string;
  readonly assignedHumanParticipantId?: string;
  readonly isPrimaryResponsible: boolean;
  readonly allocatedWorkPercentageValue: number; // e.g. 0.0 - 100.0
}

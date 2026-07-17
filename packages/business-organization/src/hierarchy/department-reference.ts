import { DivisionId } from '../identity/division-id.js';

export interface DepartmentReference {
  readonly departmentId: string;
  readonly parentDivisionId: DivisionId;
  readonly uniqueCostCenterCode: string;
  readonly headParticipantId: string;
  readonly activeTeamsIdsList: string[];
}

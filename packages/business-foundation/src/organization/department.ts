import { DepartmentId } from '../identity/department-id.js';
import { DivisionId } from '../identity/division-id.js';

export interface Department {
  readonly departmentId: DepartmentId;
  readonly parentDivisionId: DivisionId;
  readonly name: string;
  readonly costCenterCode: string;
  readonly managerParticipantId: string;
  readonly teamIdsList: string[];
}

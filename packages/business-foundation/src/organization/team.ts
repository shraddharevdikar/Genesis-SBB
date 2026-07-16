import { DepartmentId } from '../identity/department-id.js';

export interface Team {
  readonly teamId: string;
  readonly parentDepartmentId: DepartmentId;
  readonly name: string;
  readonly leadParticipantId: string;
  readonly memberParticipantIdsList: string[];
}

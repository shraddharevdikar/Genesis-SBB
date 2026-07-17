import { BusinessRole } from './business-role.js';

export interface SpecialistRole {
  readonly baseRoleDetails: BusinessRole;
  readonly specializedSubjectMatterDomain: string; // e.g. "Artificial Intelligence", "Corporate Tax"
  readonly requiresContinuousUpskillingLog: boolean;
  readonly defaultPlaybookAssignmentIdString?: string;
  readonly standardSlaResponseBufferHoursCount: number;
}

import { DepartmentState } from './department-state.js';
import { TeamState } from './team-state.js';

export interface OrganizationState {
  readonly legalName: string;
  readonly activeUnitsCount: number;
  readonly departments: DepartmentState[];
  readonly squads: TeamState[];
  readonly totalHeadcount: number;
  readonly spanOfControlAvg: number;
  readonly lastReorgDate?: Date;
}

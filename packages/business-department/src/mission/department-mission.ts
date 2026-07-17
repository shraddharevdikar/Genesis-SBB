import { StrategicObjective } from './strategic-objective.js';

export interface DepartmentMission {
  readonly missionStatementText: string;
  readonly coreValuesList: string[];
  readonly targetAudienceSegmentCode: string; // e.g. "INTERNAL_STAFF", "EXTERNAL_RETAIL"
  readonly strategicObjectivesList: StrategicObjective[];
}

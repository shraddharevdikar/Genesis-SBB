import { OrganizationalInsight } from './organizational-insight.js';

export interface StrategicInsight extends OrganizationalInsight {
  readonly targetGoalId?: string;
  readonly marketPositionDelta: 'ADVANTAGED' | 'NEUTRAL' | 'THREATENED';
  readonly boardroomFocusRequired: boolean;
}

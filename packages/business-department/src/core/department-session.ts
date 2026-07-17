import { DepartmentInstanceId } from '../identity/department-instance-id.js';

export interface DepartmentSession {
  readonly sessionId: string;
  readonly departmentInstanceId: DepartmentInstanceId;
  readonly activeAgentCount: number;
  readonly activeHumanCollaboratorCount: number;
  readonly currentActiveTaskCount: number;
  readonly sessionOpenedAt: Date;
  readonly lastHeartbeatAt: Date;
}

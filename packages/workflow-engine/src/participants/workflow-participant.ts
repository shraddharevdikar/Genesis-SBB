import { WorkflowRole } from './workflow-role.js';

export type ParticipantType = 'OWNER' | 'APPROVER' | 'REVIEWER' | 'EXECUTOR' | 'OBSERVER';

export interface WorkflowParticipant {
  readonly participantId: string;
  readonly role: WorkflowRole;
  readonly type: ParticipantType;
  readonly assignedAt: Date;
  readonly isBackup: boolean;
}

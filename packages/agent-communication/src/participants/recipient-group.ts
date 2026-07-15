import { Participant } from './participant.js';

export interface RecipientGroup {
  readonly groupId: string;
  readonly groupName: string;
  readonly distributionScopeCode: 'DIRECT' | 'DEPARTMENT' | 'TEAM' | 'EXECUTIVE' | 'WORKFLOW' | 'BROADCAST';
  readonly membersList: Participant[];
  readonly lastModifiedAt: Date;
}

import { CouncilContext } from './council-context.js';
import { CouncilRole } from '../participants/council-role.js';
import { CouncilMember } from '../participants/council-member.js';

export enum CouncilSessionStatus {
  DRAFT = 'DRAFT',
  ACTIVE = 'ACTIVE',
  COMPLETED = 'COMPLETED',
  ESCALATED = 'ESCALATED',
  SUSPENDED = 'SUSPENDED'
}

export interface CouncilSession {
  readonly sessionId: string;
  readonly context: CouncilContext;
  readonly status: CouncilSessionStatus;
  readonly invitedRoles: CouncilRole[];
  readonly activeMembers: CouncilMember[];
  readonly createdAt: Date;
  readonly updatedAt: Date;
}

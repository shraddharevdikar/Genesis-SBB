import { CouncilRole } from '../participants/council-role.js';

export interface AgendaItem {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly proposedBy: CouncilRole;
  readonly allocatedMinutes?: number;
  readonly status: 'PENDING' | 'DISCUSSING' | 'RESOLVED';
}

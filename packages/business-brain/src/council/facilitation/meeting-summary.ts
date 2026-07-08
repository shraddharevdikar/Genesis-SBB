import { CouncilRole } from '../participants/council-role.js';

export interface DecidedItem {
  readonly agendaItemId: string;
  readonly approvedProposal: string;
  readonly description: string;
}

export interface RiskItem {
  readonly description: string;
  readonly impactLevel: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';
}

export interface FollowUpAction {
  readonly assignee: CouncilRole;
  readonly action: string;
  readonly deadline?: Date;
}

export interface MeetingSummary {
  readonly summaryId: string;
  readonly sessionId: string;
  readonly compiledAt: Date;
  readonly participants: CouncilRole[];
  readonly decisions: DecidedItem[];
  readonly openQuestions: string[];
  readonly risksIdentified: RiskItem[];
  readonly followUpActions: FollowUpAction[];
}

import { DecisionParticipant } from './decision-participant.js';

export interface StakeholderParticipant extends DecisionParticipant {
  readonly organizationId?: string;
  readonly valueTierAffected?: 'ENTERPRISE' | 'MID_MARKET' | 'SMB';
  readonly interestScore: number;
  readonly sentimentTowardDecision: 'SUPPORTIVE' | 'NEUTRAL' | 'RESISTANT';
}

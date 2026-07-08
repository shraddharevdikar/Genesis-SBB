import { CouncilRole } from '../participants/council-role.js';

export type VoteType = 'APPROVE' | 'REJECT' | 'ABSTAIN';

export interface Ballot {
  readonly voter: CouncilRole;
  readonly option: VoteType;
  readonly comment?: string;
  readonly timestamp: Date;
}

export interface VotingResult {
  readonly voteId: string;
  readonly agendaItemId: string;
  readonly ballots: Ballot[];
  readonly totalEligibleVoters: number;
  readonly approveCount: number;
  readonly rejectCount: number;
  readonly abstainCount: number;
  readonly isPassed: boolean;
}

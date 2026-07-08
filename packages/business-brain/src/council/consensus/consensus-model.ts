import { CouncilRole } from '../participants/council-role.js';
import { CouncilDissentingOpinion } from './dissenting-opinion.js';
import { VotingResult } from './voting-result.js';

export interface ConsensusModel {
  readonly consensusId: string;
  readonly sessionId: string;
  readonly agendaItemId: string;
  readonly agreementPercentage: number; // 0 to 100
  readonly confidenceScore: number;       // 0.0 to 1.0 representing collective confidence
  readonly supportingExecutives: CouncilRole[];
  readonly dissentingExecutives: CouncilRole[];
  readonly dissentingOpinions: CouncilDissentingOpinion[];
  readonly votingResult?: VotingResult;
  readonly resolvedProposal: string;
  readonly achievedAt: Date;
}

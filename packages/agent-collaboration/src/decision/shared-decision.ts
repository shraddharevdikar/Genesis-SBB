import { ConsensusModelType } from './consensus-model.js';

export interface SharedDecision {
  readonly decisionId: string;
  readonly title: string;
  readonly optionsList: string[]; // Options evaluated
  readonly consensusModel: ConsensusModelType;
  readonly votesCastMap: Record<string, string>; // participantId -> chosenOption
  readonly finalSelectedOption?: string;
  readonly confidenceScore: number; // calculated confidence (0.0 to 1.0)
  readonly isApprovedByHuman: boolean; // True if supervisory override signoff happened
  readonly decidedAt?: Date;
}

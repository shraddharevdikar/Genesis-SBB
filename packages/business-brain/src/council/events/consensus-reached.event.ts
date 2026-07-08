import { ConsensusModel } from '../consensus/consensus-model.js';

export interface ConsensusReachedEvent {
  readonly eventId: string;
  readonly tenantId: string;
  readonly sessionId: string;
  readonly consensus: ConsensusModel;
  readonly timestamp: Date;
}

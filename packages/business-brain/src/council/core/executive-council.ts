import { CouncilContext } from './council-context.js';
import { CouncilSession } from './council-session.js';
import { CouncilRole } from '../participants/council-role.js';
import { ExecutiveOpinion } from '../discussion/executive-opinion.js';
import { ConsensusModel } from '../consensus/consensus-model.js';
import { MeetingSummary } from '../facilitation/meeting-summary.js';

export interface ExecutiveCouncil {
  readonly id: string;
  readonly name: string;

  /**
   * Spawns and initializes a new deliberation session under the given context.
   */
  startSession(context: CouncilContext, invitedRoles: CouncilRole[]): Promise<CouncilSession>;

  /**
   * Formally issues invites to other executive brain roles to join the session.
   */
  inviteExecutives(sessionId: string, roles: CouncilRole[]): Promise<CouncilSession>;

  /**
   * Aggregates and retrieves all submitted opinions for a specific agenda item.
   */
  collectOpinions(sessionId: string, agendaItemId: string): Promise<ExecutiveOpinion[]>;

  /**
   * Scores agreement percentage, identifies support versus dissent, and registers outcomes.
   */
  measureConsensus(sessionId: string, agendaItemId: string): Promise<ConsensusModel>;

  /**
   * Triggers a formal escalation route due to deadlocks, low confidence, or lack of expertise.
   */
  escalateDisagreement(sessionId: string, policyId: string, reason: string): Promise<{ escalationTriggered: boolean; targetRecipient: string }>;

  /**
   * Finalizes the session, compiling and synthesizing outcomes into a comprehensive MeetingSummary.
   */
  produceRecommendation(sessionId: string): Promise<MeetingSummary>;
}

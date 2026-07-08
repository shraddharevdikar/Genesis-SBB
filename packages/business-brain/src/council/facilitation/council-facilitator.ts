import { CouncilSession } from '../core/council-session.js';
import { ExecutiveOpinion } from '../discussion/executive-opinion.js';
import { ConsensusModel } from '../consensus/consensus-model.js';
import { EscalationPolicy } from '../escalation/escalation-policy.js';
import { MeetingSummary } from './meeting-summary.js';

export interface CouncilFacilitator {
  readonly facilitatorId: string;
  readonly name: string;

  /**
   * Orchestrates the active facilitation flow of a given council session.
   */
  facilitateSession(session: CouncilSession): Promise<MeetingSummary>;

  /**
   * Formally submits and records a specific executive's opinion during live deliberation.
   */
  recordOpinion(sessionId: string, opinion: ExecutiveOpinion): Promise<void>;

  /**
   * Evaluates consensus indices, agreement metrics, and checks voting records.
   */
  evaluateConsensus(sessionId: string, agendaItemId: string): Promise<ConsensusModel>;

  /**
   * Applies the escalation policies in deadlocks, lack of confidence, or missing expertise.
   */
  triggerEscalation(sessionId: string, policy: EscalationPolicy, reason: string): Promise<{ escalationTriggered: boolean; resolutionPath: string }>;
}

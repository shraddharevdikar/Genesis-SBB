import { DecisionParticipant } from './decision-participant.js';

export type ExecutiveOfficeTitle = 'CEO' | 'CFO' | 'COO' | 'CTO' | 'CMO' | 'CRO' | 'CHRO' | 'GENERAL_COUNSEL';

export interface ExecutiveParticipant extends DecisionParticipant {
  readonly executiveTitle: ExecutiveOfficeTitle;
  readonly alignmentScore: number;
  readonly signatureVerified: boolean;
}

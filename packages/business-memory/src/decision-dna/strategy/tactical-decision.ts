import { DecisionRecord } from '../core/decision-record.js';

export interface TacticalDecision extends DecisionRecord {
  readonly targetInitiativeIds: string[];
  readonly quarterHorizon: string;
  readonly operationalBlockersMitigated: string[];
}

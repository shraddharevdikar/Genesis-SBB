import { EscalationRule } from './escalation-rule.js';

export type EscalationRecipient = 'BOARD_OF_DIRECTORS' | 'HUMAN_OPERATOR' | 'ADVISORY_COUNCIL' | 'CEO_OVERRIDE';

export interface EscalationPolicy {
  readonly policyId: string;
  readonly name: string;
  readonly rules: EscalationRule[];
  readonly targetRecipient: EscalationRecipient;
  readonly fallbackProcedure: string;
}

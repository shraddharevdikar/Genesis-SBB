import { ProcessOutput } from './process-output.js';

export interface OutcomeDefinition {
  readonly outcomeId: string;
  readonly classificationCode: 'COMPLETED_SUCCESSFULLY' | 'HALTED_COMPLIANCE_BREACH' | 'ABORTED_SYSTEM_ERROR';
  readonly standardDescriptionNotes: string;
  readonly producedOutputsList: ProcessOutput[];
  readonly triggersEventCode?: string;
}

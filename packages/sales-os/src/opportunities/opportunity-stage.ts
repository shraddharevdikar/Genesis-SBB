import { OpportunityLifecycleState } from '../core/sales-lifecycle.js';

export interface OpportunityStage {
  readonly stageId: string;
  readonly stageState: OpportunityLifecycleState;
  readonly sequenceOrderNumeric: number; // e.g. 1, 2, 3, 4, 5
  readonly stageDisplayName: string; // e.g. "Proposal & Quotation"
  readonly daysSpentInCurrentStageCount: number;
  readonly isEntryCriteriaMetFlag: boolean;
  readonly verifiedEntryChecklistNotesList: string[]; // e.g. ["BANT Qualified", "Demo Completed"]
}

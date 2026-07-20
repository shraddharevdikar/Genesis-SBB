import { AutomationAction } from './automation-action.js';

export interface ActionSequence {
  readonly sequenceId: string;
  readonly orderedActionsList: AutomationAction[];
  readonly executeInParallelFlag: boolean;
  readonly haltOnFailureFlag: boolean;
}

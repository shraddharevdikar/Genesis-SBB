import { DecisionContext } from './decision-context.js';

export interface DecisionRequest {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly context: DecisionContext;
  readonly options: string[];
  readonly requestedBy: string;
  readonly deadline: Date;
}

import { ExecutiveOpinion } from './executive-opinion.js';

export interface DiscussionThread {
  readonly threadId: string;
  readonly agendaItemId: string;
  readonly opinions: ExecutiveOpinion[];
  readonly isResolved: boolean;
  readonly resolutionSummary?: string;
}

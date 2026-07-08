import { CouncilRole } from '../participants/council-role.js';

export type OpinionType = 'OPINION' | 'COUNTERARGUMENT' | 'QUESTION' | 'RECOMMENDATION';

export interface ExecutiveOpinion {
  readonly opinionId: string;
  readonly author: CouncilRole;
  readonly type: OpinionType;
  readonly content: string;
  readonly timestamp: Date;
  readonly referenceOpinionId?: string; // Links thread responses or counterarguments
}

import { ConceptId } from '../identity/concept-id.js';

export interface ConceptDefinition {
  readonly definitionId: string;
  readonly conceptId: ConceptId;
  readonly textExplanation: string;
  readonly authoritativeCitationBookString?: string; // e.g. "SBB Finance Terminology Handbook Q2"
  readonly lastUpdatedAt: Date;
}

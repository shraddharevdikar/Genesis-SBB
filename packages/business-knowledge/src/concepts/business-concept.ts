import { ConceptId } from '../identity/concept-id.js';
import { ConceptDefinition } from './concept-definition.js';
import { ConceptClassificationCode } from './concept-classification.js';

export interface BusinessConcept {
  readonly conceptId: ConceptId;
  readonly uniqueConceptCode: string; // e.g. "CON-FIN-EBIDTA"
  readonly displayName: string;
  readonly aliasesList: string[]; // alternative labels / synonyms
  readonly classification: ConceptClassificationCode;
  readonly primaryDefinition: ConceptDefinition;
}

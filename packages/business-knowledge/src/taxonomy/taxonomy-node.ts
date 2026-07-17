import { ConceptId } from '../identity/concept-id.js';

export interface TaxonomyNode {
  readonly nodeId: string;
  readonly labelTitle: string;
  readonly uniqueNodeCode: string; // e.g. "TAXNODE-FIN-001"
  readonly boundConceptIdString?: ConceptId; // if this node maps to a business concept
  readonly childNodesList: TaxonomyNode[];
}

import { TaxonomyNode } from './taxonomy-node.js';

export interface Taxonomy {
  readonly taxonomyId: string;
  readonly uniqueTaxonomyCode: string; // e.g. "TAX-CORP-FIN"
  readonly displayName: string;
  readonly descriptionNotes: string;
  readonly rootNode: TaxonomyNode;
  readonly lastUpdatedAt: Date;
}

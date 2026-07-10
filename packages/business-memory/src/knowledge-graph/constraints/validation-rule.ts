import { NodeRule } from './node-rule.js';
import { RelationshipRule } from './relationship-rule.js';
import { OntologyRule } from './ontology-rule.js';

export interface ValidationRuleSet {
  readonly ruleSetId: string;
  readonly name: string;
  readonly nodeRules: NodeRule[];
  readonly relationshipRules: RelationshipRule[];
  readonly ontologyRules: OntologyRule[];
  readonly isStrictComplianceRequired: boolean;
}

import { TemplateReference } from './template-reference.js';
import { DependencyGraph } from './dependency-graph.js';

export interface BlueprintComposition {
  readonly compositionId: string;
  readonly uniqueCompositionCode: string; // e.g. "CMP-FINANCE-OS-BASIC"
  readonly templateReferencesList: TemplateReference[];
  readonly dependencies: DependencyGraph;
  readonly customConflictDetectionRulesList: string[];
  readonly maximumCompositionDepthLimit: number;
  readonly isFullyValidatedFlag: boolean;
}

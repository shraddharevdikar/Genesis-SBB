import { KnowledgeReference } from './knowledge-reference.js';

export interface KnowledgeRequirement {
  readonly requirementId: string;
  readonly description: string;
  readonly requiredReferences: KnowledgeReference[];
  readonly mustVerifyRecallBeforeExecution: boolean;
}

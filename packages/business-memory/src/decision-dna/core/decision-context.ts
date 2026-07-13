import { MemoryContext } from '../../core/memory-context.js';

export interface DecisionContext extends MemoryContext {
  readonly dryRun?: boolean;
  readonly classificationScope?: 'PUBLIC' | 'RESTRICTED' | 'CONFIDENTIAL' | 'SECRET';
  readonly bypassPolicyValidation?: boolean;
}

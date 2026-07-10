import { MemoryContext } from '../../core/memory-context.js';

export interface GraphContext extends MemoryContext {
  readonly maxTraversalDepth?: number;
  readonly bypassSchemaValidation?: boolean;
  readonly classificationScope?: 'PUBLIC' | 'RESTRICTED' | 'CONFIDENTIAL' | 'SECRET';
  readonly correlationId?: string;
  readonly dryRun?: boolean;
}

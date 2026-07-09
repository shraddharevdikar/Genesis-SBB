import { MemoryContext } from './memory-context.js';
import { MemoryRecord } from './memory-record.js';
import { MemoryId } from '../identity/memory-id.js';
import { MemoryType } from '../classification/memory-type.js';
import { MemoryCategory } from '../classification/memory-category.js';
import { RelatedMemory } from '../references/related-memory.js';

export interface BusinessMemory {
  /**
   * Creates a persistent organizational memory record under a given context.
   */
  createMemory(context: MemoryContext, record: Partial<MemoryRecord>): Promise<MemoryRecord>;

  /**
   * Updates an existing memory record's content, tags, custom attributes, or policies.
   */
  updateMemory(context: MemoryContext, id: MemoryId, updates: Partial<MemoryRecord>): Promise<MemoryRecord>;

  /**
   * Marks a memory record as archived, moving it out of operational query sets.
   */
  archiveMemory(context: MemoryContext, id: MemoryId): Promise<MemoryRecord>;

  /**
   * Updates the category and type classifications of a memory record.
   */
  classifyMemory(
    context: MemoryContext,
    id: MemoryId,
    type: MemoryType,
    category: MemoryCategory
  ): Promise<MemoryRecord>;

  /**
   * Establishes a typed, directed relationship between two memory records.
   */
  relateMemories(context: MemoryContext, relation: RelatedMemory): Promise<RelatedMemory>;
}

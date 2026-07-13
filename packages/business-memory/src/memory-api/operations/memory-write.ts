import { MemorySession } from '../core/memory-session.js';

export interface MemoryWriteOptions {
  readonly dryRun?: boolean;
  readonly classificationOverride?: 'PUBLIC' | 'RESTRICTED' | 'CONFIDENTIAL' | 'SECRET';
}

export interface MemoryWrite {
  /**
   * Commits or modifies a canonical corporate memory payload block.
   */
  write(
    session: MemorySession,
    sourceId: string,
    payload: Record<string, any>,
    options?: MemoryWriteOptions
  ): Promise<{ success: boolean; committedId: string; timestamp: Date }>;
}

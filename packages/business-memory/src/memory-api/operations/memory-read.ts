import { MemorySession } from '../core/memory-session.js';

export interface MemoryReadOptions {
  readonly includeMetadata?: boolean;
  readonly bypassCache?: boolean;
}

export interface MemoryRead {
  /**
   * Reads canonical corporate memory details by specific key coordinates.
   */
  read(
    session: MemorySession,
    sourceId: string,
    options?: MemoryReadOptions
  ): Promise<Record<string, any>>;
}

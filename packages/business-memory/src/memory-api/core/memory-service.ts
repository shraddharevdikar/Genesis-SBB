import { MemoryRequest } from './memory-request.js';
import { MemoryResponse } from './memory-response.js';

export interface MemoryService {
  /**
   * Executes a unified internal SBB Memory API Request and compiles results.
   */
  execute(request: MemoryRequest): Promise<MemoryResponse>;
}

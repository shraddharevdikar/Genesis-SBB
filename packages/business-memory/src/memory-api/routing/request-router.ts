import { MemoryRequest } from '../core/memory-request.js';

export type RouteDestination = 'BUSINESS_MEMORY' | 'KNOWLEDGE_GRAPH' | 'DIGITAL_TWIN' | 'DECISION_DNA' | 'LEARNING_ENGINE' | 'CONTEXT_ENGINE';

export interface RequestRouter {
  /**
   * Evaluates the query types or command payloads to resolve the best-suited target engine.
   */
  routeRequest(request: MemoryRequest): Promise<RouteDestination>;
}

import { MemorySession } from './memory-session.js';
import { MemoryQuery } from '../contracts/memory-query.js';
import { QueryResult, ContextResult, LearningResult, GraphResult } from '../contracts/memory-result.js';
import { MemoryReadOptions } from '../operations/memory-read.js';
import { MemorySearchOptions } from '../operations/memory-search.js';
import { MemoryContextOptions } from '../operations/memory-context.js';
import { MemoryLearningOptions } from '../operations/memory-learning.js';
import { MemoryGraphOptions } from '../operations/memory-graph.js';
import { RouteDestination } from '../routing/request-router.js';
import { MemoryRequest } from './memory-request.js';

export interface MemoryAPI {
  /**
   * Executes structured semantic queries against targeted memory caches or engines.
   */
  queryMemory(
    session: MemorySession,
    query: MemoryQuery
  ): Promise<QueryResult>;

  /**
   * Directly retrieves an un-indexed specific memory document or payload block.
   */
  readMemory(
    session: MemorySession,
    sourceId: string,
    options?: MemoryReadOptions
  ): Promise<Record<string, any>>;

  /**
   * Searches the indexed memory nodes by tags, keyword matching, or relevance filters.
   */
  searchMemory(
    session: MemorySession,
    keywords: string[],
    options?: MemorySearchOptions
  ): Promise<Record<string, any>[]>;

  /**
   * Assembles high-fidelity context for executive reasoning matching target profiles.
   */
  retrieveContext(
    session: MemorySession,
    profileId: string,
    options?: MemoryContextOptions
  ): Promise<ContextResult>;

  /**
   * Retreives organizational playbooks, lessons learned, and failure triggers compiled by SBB.
   */
  retrieveLearning(
    session: MemorySession,
    learningDomain: string,
    options?: MemoryLearningOptions
  ): Promise<LearningResult>;

  /**
   * Navigates node relationships, mapping capability linkages inside the Knowledge Graph.
   */
  retrieveGraph(
    session: MemorySession,
    originNodeId: string,
    options?: MemoryGraphOptions
  ): Promise<GraphResult>;

  /**
   * Validates if the authenticated role has appropriate clearances for a given security tier.
   */
  validateAccess(
    session: MemorySession,
    requiredClearance: 'PUBLIC' | 'RESTRICTED' | 'CONFIDENTIAL' | 'SECRET'
  ): Promise<boolean>;

  /**
   * Identifies the best target engine routing destination based on request semantics.
   */
  routeRequest(
    request: MemoryRequest
  ): Promise<RouteDestination>;
}

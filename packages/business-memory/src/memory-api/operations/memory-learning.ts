import { MemorySession } from '../core/memory-session.js';
import { LearningResult } from '../contracts/memory-result.js';

export interface MemoryLearningOptions {
  readonly minimumConfidenceScore?: number;
}

export interface MemoryLearningOperation {
  /**
   * Accesses standard patterns, best practices, and lessons learned compiled by the learning engine.
   */
  retrieveLearning(
    session: MemorySession,
    learningDomain: string,
    options?: MemoryLearningOptions
  ): Promise<LearningResult>;
}

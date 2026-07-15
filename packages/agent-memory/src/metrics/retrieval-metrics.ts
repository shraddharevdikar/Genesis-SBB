import { MemoryReferenceId } from '../identity/memory-reference-id.js';

export interface RetrievalMetrics {
  readonly metricsId: string;
  readonly tenantId: string;
  readonly activeQueriesProcessedCount: number;
  readonly averageSearchLatencyMs: number;
  readonly memoryReferenceHitsList: MemoryReferenceId[];
  readonly ratioCacheHits: number; // 0.0 - 1.0 cache hits
  readonly timestamp: Date;
}

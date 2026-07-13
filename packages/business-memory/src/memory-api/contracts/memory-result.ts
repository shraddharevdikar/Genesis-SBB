export interface MemoryResultMetadata {
  readonly responseTimeMs: number;
  readonly isCached: boolean;
  readonly dataFreshness: Date;
  readonly schemaVersion: string;
}

export interface QueryResult {
  readonly resultId: string;
  readonly payload: Record<string, any>[];
  readonly totalResultsCount: number;
  readonly metadata: MemoryResultMetadata;
}

export interface ContextResult {
  readonly resultId: string;
  readonly assembledContextId: string;
  readonly activeItemsCount: number;
  readonly structuredContextPayload: Record<string, any>;
  readonly metadata: MemoryResultMetadata;
}

export interface LearningResult {
  readonly resultId: string;
  readonly capturedExperiencesCount: number;
  readonly matchedPatternsCount: number;
  readonly recommendationsList: Record<string, any>[];
  readonly metadata: MemoryResultMetadata;
}

export interface GraphResult {
  readonly resultId: string;
  readonly traversedNodesCount: number;
  readonly traversedEdgesCount: number;
  readonly adjacencyList: Record<string, string[]>;
  readonly metadata: MemoryResultMetadata;
}

export interface DigitalTwinResult {
  readonly resultId: string;
  readonly currentVitalsSnapshotId: string;
  readonly measuredHealthScore: number;
  readonly activeOperationalAnomalies: string[];
  readonly metadata: MemoryResultMetadata;
}

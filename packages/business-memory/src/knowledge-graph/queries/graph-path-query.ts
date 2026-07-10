export interface GraphPathQuery {
  readonly startNodeId: string;
  readonly endNodeId: string;
  readonly maxDepth?: number;
  readonly shortestPathOnly?: boolean;
}
